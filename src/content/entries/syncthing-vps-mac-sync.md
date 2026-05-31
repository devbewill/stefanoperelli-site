---
type: post
title: "Syncthing: Sync Files Between a VPS and Your Computer Without the Cloud"
description: "How I set up Syncthing to keep a shared folder in sync between a Linux server and a Mac. No cloud services, no subscriptions, no privacy trade-offs."
pubDate: 2026-06-01
tags: ["syncthing", "self-hosted", "sync", "tutorial", "vps", "open-source"]
readingTime: "5 min"
---

# Syncthing: Sync Files Between a VPS and Your Computer Without the Cloud

Some folders just need to live in two places at once.

I have a shared knowledge base — notes, projects, research, templates — that I edit from both a Linux VPS and my Mac. I needed it to stay in sync automatically, without having to think about it.

The obvious answer would be a cloud service: Dropbox, Google Drive, iCloud. But for a folder that contains work notes, decisions, and research, I prefer something that doesn't route through someone else's server.

**Syncthing** is the answer.

## What is Syncthing

Syncthing is an open source, peer-to-peer file synchronization tool. There's no central server — your files go directly from one device to another, encrypted in transit.

There are no subscriptions, no storage limits, no company reading your data. It's maintained by an active open source community and has been around for over a decade.

## How it works

The concept is straightforward:

1. Every device (phone, laptop, server, Raspberry Pi) gets a **Device ID** — a unique cryptographically-generated identifier
2. You pair devices by exchanging Device IDs
3. You create a **shared folder** and choose which devices can see it
4. Any file change propagates to the other devices automatically

Under the hood, all traffic is encrypted with TLS. Syncthing can connect in three ways:

- **Direct TCP connection:** the fastest option, when devices can reach each other over the network or internet
- **QUIC connection:** an alternative over UDP, useful if the TCP port is blocked
- **Relay:** when no direct connection is possible, it falls back to public relays — the relay sees only encrypted traffic and cannot read your files

## Setting it up

### On a Linux server (Ubuntu)

Syncthing is available in the official repositories:

```bash
sudo apt install syncthing
syncthing generate
```

This creates the configuration in `~/.local/state/syncthing/config.xml` and generates the Device ID.

The web-based admin interface runs on `http://127.0.0.1:8384`. By default it listens only on localhost, so it's only reachable from the server itself.

### On a Mac

You can download Syncthing from [syncthing.net](https://syncthing.net/downloads/) or install it via Homebrew:

```bash
brew install syncthing
syncthing --no-browser
```

Then open `http://127.0.0.1:8384` in a browser. The admin interface looks the same on every platform — consistent layout, same settings.

### Pairing devices

From the Mac's admin interface:

1. Click **"Add Remote Device"**
2. Paste the server's Device ID (find it under *Actions → Show ID*)
3. Give it a name and save

On the server side, accept the pairing request. The two devices are now connected. The initial connection can take a few seconds while Syncthing negotiates encryption and discovers the best route.

### Sharing a folder

From any device's admin interface:

1. Click **"Add Folder"**
2. Set a **Folder ID** — this must be identical on every device sharing the folder
3. Choose the local path (e.g. `/home/user/shared-folder`)
4. In the **Sharing** tab, select which devices should receive the folder

On the other device, Syncthing detects the shared folder and asks where to store it locally. Pick a path (e.g. `~/shared-folder`) and synchronization starts automatically.

## When a direct connection isn't available

A common scenario: the server runs on a cloud provider without a public port open for Syncthing (port 22000/TCP).

Syncthing handles this gracefully by falling back to **public relays**. The relay passes encrypted traffic only — it cannot read the actual files — but synchronization can be slightly slower because data travels through an intermediary.

If a direct connection is preferred, there are a few options:

1. **Open the firewall port:** `sudo ufw allow 22000/tcp` on the server
2. **Tailscale or ZeroTier:** create a VPN between devices so they see each other as local
3. **Cloudflare Tunnel / WireGuard:** a more structured approach for those already using a tunnel

For text files and occasional edits, the relay fallback works perfectly fine.

## Real-world experience

Syncthing is the kind of tool you set up and forget about. After the initial configuration, it just works. Open a file on one device, edit it, and the changes are synced by the time you switch to the other device.

What stands out:

- **No subscription.** No monthly fee for any service tier.
- **No storage limits.** Sync as much as your disk allows.
- **Actual privacy.** Relays cannot decrypt the data passing through them.
- **Cross-platform.** Mac, Windows, Linux, Android, Raspberry Pi, NAS hardware — it runs on all of them.
- **Fully open source.** The code is public, auditable, and community-reviewed.

One thing to keep in mind: avoid editing the same file simultaneously on two devices. If that happens, Syncthing creates a conflict file (`.sync-conflict-...`). In practice, this is rare.

## Conclusion

If you have a server and a computer and need to keep files in sync between them, Syncthing is the cleanest solution available. No cloud middleman, no account creation, no recurring payments. Install, pair, pick a folder, and it runs.

For me, it solved the problem of a knowledge base living on two machines. For someone else, it might be password vaults, project files, system configurations, or photos.

Whatever the use case, Syncthing does one thing and does it well: keeping files aligned, without a master.
