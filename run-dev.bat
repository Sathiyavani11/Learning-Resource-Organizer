@echo off
cd /d "%~dp0"
call npm.cmd install
call npm.cmd run dev -- --host --port 5173
