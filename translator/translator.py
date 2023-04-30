from re import MULTILINE
from re import findall
from re import sub
from subprocess import PIPE
from subprocess import Popen
from subprocess import run
from sys import stdout

from autopep8 import fix_code

print("""
██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗██████╗░██████╗░██╗░██████╗░█████╗░░█████╗░██████╗░██████╗░
██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝╚════██╗██╔══██╗██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗
██████╦╝██║░░░░░██║░░██║██║░░╚═╝█████═╝░░░███╔═╝██║░░██║██║╚█████╗░██║░░╚═╝██║░░██║██████╔╝██║░░██║
██╔══██╗██║░░░░░██║░░██║██║░░██╗██╔═██╗░██╔══╝░░██║░░██║██║░╚═══██╗██║░░██╗██║░░██║██╔══██╗██║░░██║
██████╦╝███████╗╚█████╔╝╚█████╔╝██║░╚██╗███████╗██████╔╝██║██████╔╝╚█████╔╝╚█████╔╝██║░░██║██████╔╝
╚═════╝░╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝╚═════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░
                                    Code Translater and Cleaner
""")


with open("block2discord.in", "r") as file:
    code = file.read()

def rep(old, new):
    global code
    code = code.replace(old, new)

def reg(old, new):
    global code
    code = sub(old, new, code, flags=MULTILINE)

print("> Translating login...")
rep("discord.run", "bot.run")
prefix = findall(r"bot.run\(.*,\s*(.*)\)", code, flags=MULTILINE)[0]
reg(r"bot.run\((.*),\s*.*\)", r"bot.run(\1)")
code = f"""\
import asyncio
import discord
from discord.ext.commands import Bot
import math
import time

bot = Bot(intents=discord.Intents.all(), command_prefix={prefix})
""" + code

print("> Translating command bindings...")
reg(r'def on_bot_command\d*\(context(\d*)\):\n((.|\s)*?)\ndiscord.on_bot_command\(\"(.*)\",\s*on_bot_command\d*\)',
    r'@bot.command(name="\4")\nasync def _\4(context\1):\n\2')

print("> Translating event bindings...")
rep("on_on", "on")
reg(r"^discord.on_.*", "")
reg(r"^def on_", r"@bot.event\nasync def on_")

print("> Translating definition...")
rep("Math.round", "round")
rep("discordColour", "discord.Colour")
rep("discord.bot_user()", "bot.user")
rep("loops.pause", "await asyncio.sleep")
rep("_alt", "")
reg(r"^\s*.*?: .*? = None$", "")
reg(r"^\s*global .*$", "")

print("> Adding awaits...")
for func in ("edit", "fetch_channel", "fetch_member", "reply", "send"):
    reg(r"^(\s*)(\S*?)." + func, r"\1 await \2." + func)
    reg(r"^(\s*)(.*?) = (.*?)." + func, r"\1\2 = await \3." + func)

print("> Adding keyword arguments...")
reg(r".add_field\((.*),\s*(.*),\s*(.*)\)", r".add_field(name=\1, value=\2, inline=\3)")
reg(r".edit\((.*),\s*(.*),\s*(.*)\)", r".edit(content=\1, embed=\2, attachments=\3)")
reg(r".reply\((.*),\s*(.*),\s*(.*),\s*(.*)\)", r".reply(\1, embed=\2, file=\3, tts=\4)")
reg(r".send\((.*),\s*(.*),\s*(.*),\s*(.*)\)", r".send(\1, embed=\2, file=\3, tts=\4)")
reg(r".set_author\((.*),\s*(.*)\)", r".set_author(name=\1, icon_url=\2)")
reg(r".set_footer\((.*),\s*(.*)\)", r".set_footer(text=\1, icon_url=\2)")
reg(r".set_image\((.*)\)", r".set_image(url=\1)")
reg(r".set_thumbnail\((.*)\)", r".set_thumbnail(url=\1)")
reg(r"discordEmbed.create_embed\((.*),\s*(.*),\s*(.*)\)", r"discord.Embed(title=\1, description=\2, colour=\3)")
reg(r"discordFile.create_file\((.*),\s*(.*),\s*(.*)\)", r"discord.File(\1, filename=\2, spoiler=\3)")

print("> Cleaning default arguments...")
default_args = {
    "description": ('""', "None"),
    "filename": ('""', "None"),
    "icon_url": ('""', "None"),
    "title": ('""', "None"),
}
for name, repl in default_args.items():
    rep(f"{name}={repl[0]}", f"{name}={repl[1]}")


print("> Formatting code to PEP 8 style guide...")
code = fix_code(code)

with open("block2discord.py", "w+") as file:
    print("> Writing to block2discord.py...")
    file.write(code)

print("> Cleaning unused code...")
run(("autoflake", "--in-place", "--remove-unused-variables", "block2discord.py"))

print("> Complete!\n")

start = input("> Start Discord bot? ")

if start.lower() in ("y", "yes"):
    print("> Starting Discord bot...")
    process = Popen(("python", "block2discord.py"), stdout=PIPE, shell=True)
    for c in iter(lambda: process.stdout.read(1), b""):
        stdout.buffer.write(c)
    process.wait()
