# A Little Safe Place

A baby otter holds a sleeping duckling: a small moment of warmth and safety.
Prepared for [Make the cutest picture](https://make.fun/bounty/cutest-picture-01).

## Run

Requires Node.js 22. No packages, build step, credentials, or network access are needed.

```sh
node main.ts
```

The program copies the included `submission.jpg` unchanged to `/output/entry.png`.
Set `MAKEFUN_OUTPUT_DIR` to choose another output directory; it is created as needed.
The output contains JPEG bytes, as the bounty permits even with the `.png` filename.

PowerShell example:

```powershell
$env:MAKEFUN_OUTPUT_DIR = Join-Path $env:TEMP 'a-little-safe-place-output'
& 'C:\Program Files\Adobe\Adobe Creative Cloud Experience\libs\node.exe' .\main.ts
```

`submission.jpg` is made from the user-selected `cute-original.png` by uniform
downscaling and JPEG encoding only, preserving the full frame and composition.
The original image is retained locally and excluded from Git. Transcripts,
submission responses, credentials, and test reports are kept out of the repository.

## License

MIT; see [LICENSE](LICENSE).
