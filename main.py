import discord
from discord.ext import commands
from asyncio import sleep
from discord.utils import get
from discord import User
import sys
import string

import asyncio
import time
token=''
prefix = "op"
bot = commands.Bot(command_prefix=prefix)
bot.remove_command('help')
BOT_OWNER_ROLE="owner"

@bot.event
async def on_ready():
    """Tells what the bot to do when it is ready."""
    await bot.change_presence(
        status=discord.Status.idle,
        activity=discord.Game(''))
    print("User: " + bot.user.name)
    
@bot.command()
async def emp(ctx, *, content:str):
    #await ctx.message.delete()
    await ctx.send("ruk")
    await sleep(0.1)
    for _ in range(1000):
        await ctx.send(content)
        await sleep(0.1)

@bot.command()
async def jnall(ctx):
    channel = ctx.message.author.voice.channel
    voice = get(bot.voice_clients, guild=ctx.guild)

    if voice and voice.is_connected():
        await voice.move_to(channel)
    else:
        voice = await channel.connect()

    await ctx.send("I joined the channel!")        

bot.run(token,bot=False)  # Where 'TOKEN' is 
