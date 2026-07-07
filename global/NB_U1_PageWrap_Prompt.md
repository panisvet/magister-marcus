# Magister Historia — Unit 1 Notebooking Page Wrap
## Nano Banana Pro Generation Prompt

---

## GENERATION PROMPT

Classical homeschool curriculum notebooking page wrap from "Magister Historia" 
(Schola Domestica / Magister Marcus). 3:4 aspect ratio, sized for crisp 8.5x11 
printing. This is a reusable background template — the center illustration zone 
will receive a dropped-in historical artwork in layout; do not fill it with 
generated content.

BACKGROUND & STYLE: Full-bleed antique cream parchment with rich aged texture, 
deep watercolor staining, and soft foxing at the edges. Warm muted sepia and 
soft green-brown tones throughout. Victorian natural history journal aesthetic 
with medieval illuminated manuscript sensibility — fine ink penwork with soft 
watercolor wash.

BORDER TREATMENT: Delicate ivy and fern botanical vines form the border 
framework on all four sides. Woven into the border at the four corners and at 
regular intervals along all four sides are small inset illustrations in medieval 
illuminated manuscript marginalia style — fine ink penwork with soft watercolor 
wash, warm sepia and muted earth tones. Each inset depicts a historically 
specific object from Unit 1 (British colonies, exploration, 1492–1763). The 
insets are contained, slightly whimsical, and rendered with careful craft — in 
the tradition of the Luttrell Psalter or Book of Hours marginalia, not 
cartoonish. The botanical vines connect and frame the insets organically.

UNIT 1 MARGINALIA INSETS (8 objects, distributed around the border):
- Caravel under full sail (top-left corner)
- Compass rose (top-right corner)
- Birch bark canoe (bottom-left corner)
- Rolled nautical chart, partially unfurled (bottom-right corner)
- Astrolabe (left side, mid)
- Tobacco leaf and clay pipe (right side, mid)
- Atlantic codfish (top, mid)
- Wampum strand (bottom, mid)

SERIES TITLE (small, top center, elegant Cinzel serif, moss green):
"Magister Historia"
Thin decorative rule beneath.

UNIT HEADER (centered below series title, Cinzel small-caps, deep sepia):
"UNIT I · THE BRITISH COLONIES OF NORTH AMERICA"

CENTER ILLUSTRATION ZONE: A large rectangular frame with a thin ink-and-vine 
border, occupying the central two-thirds of the page vertically. The interior 
of this frame is clean, undecorated parchment — leave it completely empty. 
This zone receives the historical artwork in layout composition.

PAGE TITLE ZONE: A centered text area directly beneath the illustration frame, 
italic serif, moss green. Leave as blank parchment — title text will be added 
in layout.

RULED LINES: 4 evenly spaced horizontal ruled lines in faded sepia ink below 
the page title zone, full width inside the botanical border. Lines should appear 
as aged ink on parchment — not crisp modern lines.

BOTTOM ORNAMENT: A small decorative botanical vignette centered above the 
footer — a sprig of fern with one small ink-drawn insect resting on it.

FOOTER (small, centered, Cinzel, deep sepia):
"Form IA & Form IIA  •  Notebook Pages"

---

## CONFIRMED ZONE COORDINATES

### V2 Wrap — `NB_U1_PageWrap_v2.jpg` (ACTIVE — used for all final Unit 1 pages)

Detected via long-dark-run scan (Session 6). Panel borders found as 541px 
horizontal runs at y=176 (top) and y=661 (bottom), x=178 left, x=718 right.

| Parameter | Value |
|-----------|-------|
| ZONE_X | 180 |
| ZONE_Y | 178 |
| ZONE_W | 537 |
| ZONE_H | 483 |
| Right edge | x = 717 |
| Bottom edge | y = 661 |
| Title Y center | 686 (midpoint between panel bottom y=661 and first ruled line y=711) |
| Ruled lines | y = 711, 744, 778, 811, 845, 878 |
| Border color | sepia RGB(130, 100, 68), width=2, drawn ON TOP of artwork |
| Title color | moss green RGB(92, 107, 58) |
| Title font | Palatino (system serif fallback) |
| Compositing | crop-to-fill (max scale, center crop — no letterboxing) |
| Output folder | `public/worksheets/unit1/notebooking/` |

### V1 Wrap — `NB_U1_PageWrap.png` (superseded, kept for reference)

Detected via dark-pixel scan at y=400 on inner page border.

| Parameter | Value |
|-----------|-------|
| ZONE_X | 148 |
| ZONE_Y | 141 |
| ZONE_W | 615 |
| ZONE_H | 550 |
| Title Y center | 737 |

---

## ZONE DETECTION SCRIPT (run on any new wrap to get coordinates)

```python
from PIL import Image

wrap = Image.open("NB_U1_PageWrap_vX.jpg").convert("RGB")
W, H = wrap.size

# Find panel borders as long consistent dark horizontal runs
print("Long dark horizontal runs (panel top/bottom borders):")
for y in range(100, H-100):
    run = 0; best = 0; bstart = 0
    for x in range(100, W-100):
        r,g,b = wrap.getpixel((x,y))
        if (r+g+b)//3 < 130:
            run += 1
            if run > best: best = run; bstart = x-run+1
        else:
            run = 0
    if best > 200:
        print(f"  y={y}: dark run of {best}px starting at x={bstart}")

# Find ruled lines below panel (light — use threshold 210)
print("\nRuled lines (scan center column below panel):")
cx = W // 2
for y in range(600, 950):
    r,g,b = wrap.getpixel((cx, y))
    if (r+g+b)//3 < 210:
        print(f"  y={y}: avg={(r+g+b)//3}")
```

**How to read output:**
- Two long runs (400px+) = top and bottom panel borders → ZONE_Y and bottom edge
- ZONE_X = run start x + 2; ZONE_W = run length - 4 (inset from border)
- Title Y = midpoint between panel bottom and first ruled line
- Right edge = ZONE_X + ZONE_W

---

## COMPOSITING SCRIPT (reusable for any unit — update paths and pages list)

```python
from PIL import Image, ImageDraw, ImageFont
import os

WRAP_PATH  = "path/to/NB_UX_PageWrap_vX.jpg"
IMG_DIR    = "path/to/source/images"
OUT_DIR    = "path/to/output"

# ↓ UPDATE THESE per wrap (run detection script above)
ZONE_X, ZONE_Y = 180, 178
ZONE_W, ZONE_H = 537, 483
TITLE_Y        = 686
MOSS_GREEN     = (92, 107, 58)
BORDER_COLOR   = (130, 100, 68)
FONT_PATH      = "/System/Library/Fonts/Palatino.ttc"

# ↓ UPDATE THESE per unit
pages = [
    ("source_01.jpg", "NB_UX_01_PageName.png", "Page Title Text"),
    # ... 8 entries total
]

def get_font(size):
    try:    return ImageFont.truetype(FONT_PATH, size)
    except: return ImageFont.load_default()

def fill_to_zone(art, zw, zh):
    """Crop-to-fill: scale up so artwork fills zone, then center-crop. No letterboxing."""
    aw, ah = art.size
    scale  = max(zw/aw, zh/ah)
    nw, nh = int(aw*scale), int(ah*scale)
    r = art.resize((nw, nh), Image.LANCZOS)
    return r.crop(((nw-zw)//2, (nh-zh)//2, (nw-zw)//2+zw, (nh-zh)//2+zh))

for art_file, out_file, title in pages:
    base   = Image.open(WRAP_PATH).convert("RGB")
    art    = Image.open(os.path.join(IMG_DIR, art_file)).convert("RGB")
    filled = fill_to_zone(art, ZONE_W, ZONE_H)
    base.paste(filled, (ZONE_X, ZONE_Y))

    draw = ImageDraw.Draw(base)
    # Sepia hairline border drawn ON TOP — always visible regardless of artwork
    draw.rectangle([ZONE_X, ZONE_Y, ZONE_X+ZONE_W, ZONE_Y+ZONE_H],
                   outline=BORDER_COLOR, width=2)

    # Title — auto-size to fit zone width
    for fs in range(26, 10, -1):
        font = get_font(fs)
        bbox = draw.textbbox((0,0), title, font=font)
        if bbox[2]-bbox[0] <= ZONE_W - 10: break
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    draw.text((ZONE_X + (ZONE_W-tw)//2, TITLE_Y - th//2),
              title, font=font, fill=MOSS_GREEN)

    base.save(os.path.join(OUT_DIR, out_file), "PNG")
    print(f"✓ {out_file}")
```

**Critical rules:**
- Always draw the sepia border AFTER pasting artwork, not before
- Use `max()` scale (crop-to-fill), not `min()` (letterbox) — letterbox shows cream bars
- Save to `output_pages/` subfolder to protect from overwriting by other sessions
- Do NOT let another session re-run compositing without reading this file first

---

## MARGINALIA STYLE NOTE (added after Session 6 test)

The first wrap generation rendered marginalia as flat brown silhouettes on sepia.
All future wrap generations must include this language explicitly in the prompt:

> Do NOT render any marginalia as flat silhouettes, monochrome stamps, or brown 
> icons on sepia. Each inset must be a small fully-rendered illustration — fine 
> black ink linework with soft watercolor wash in warm earth tones (ochre, 
> sienna, muted teal, moss green). Each object must look like a tiny painting 
> from a Book of Hours border — visible brushwork, light and shadow, slightly 
> whimsical. Every object must read as a distinct colored illustration against 
> the parchment.

---

## USAGE NOTES FOR LAYOUT

This wrap is the background layer for all 8 Unit 1 notebooking pages.

Per-page variables dropped in at layout stage:
- Center illustration zone: PD artwork (see U1_NotebookingPrompts.md)
- Page title zone: page-specific title (e.g. "Columbus Lands — October 12, 1492")

The wrap itself does not change between pages — generate once, reuse 8 times.

For Units 2–4, generate a new wrap with unit-specific marginalia insets 
(see MASTER_BUILD_PLAN or session notes for per-unit marginalia lists).

---

## PER-UNIT MARGINALIA REFERENCE (for Sessions 11, 17, 23)

**Unit 2 — The American Founding, 1763–1789**
Quill pen and inkwell · Rolled parchment (Declaration) · Tricorn hat · 
Musket and powder horn · Scales of justice · Lantern · Drum · Liberty cap on a pole
Corners: Quill/inkwell (TL), Tricorn hat (TR), Musket (BL), Scales (BR)

**Unit 3 — The Early Republic, 1789–1848**
Paddle-wheel steamboat · Iron plow · Covered wagon · Eagle with banner · 
Printing press · Canal lock · Coonskin cap · Surveyor's chain
Corners: Eagle (TL), Steamboat (TR), Covered wagon (BL), Plow (BR)

**Unit 4 — The Civil War Era, 1848–1877**
Rifle and bayonet · Railroad locomotive · Scales of justice · Rolled proclamation · 
Cotton boll · Unbroken shackle · Ballot box · Freedman's primer/book
Corners: Locomotive (TL), Rifle (TR), Ballot box (BL), Scales (BR)
