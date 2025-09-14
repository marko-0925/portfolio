import os
import subprocess

# WARNING: Only use on local or throwaway repos
# Moves all commits from Aug 6 and Aug 7 to Aug 1

TARGET_DATES = ["2025-08-06", "2025-08-07"]
NEW_DATE = "2025-08-01T12:00:00"

def rewrite_dates():
    for date in TARGET_DATES:
        command = (
            f'git filter-branch --env-filter \''
            f'if [ "$GIT_COMMITTER_DATE" = "{date}T12:00:00" ]; then '
            f'export GIT_COMMITTER_DATE="{NEW_DATE}"; '
            f'export GIT_AUTHOR_DATE="{NEW_DATE}"; '
            f'fi\' -- --all'
        )
        print(f"Rewriting commits from {date} to {NEW_DATE}")
        subprocess.run(command, shell=True)

if __name__ == "__main__":
    rewrite_dates()
