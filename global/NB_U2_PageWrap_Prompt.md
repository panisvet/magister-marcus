# Magister Historia — Unit 2 Notebooking Page Wrap
## Nano Banana Pro Generation Prompt

---

## ACTIVE WRAP

**File:** `NB_U2_PageWrap.jpg` (committed to repo at `public/worksheets/unit2/notebooking/`)  
**Source:** `NB_U2_PageWrap_B_v4_1.jpg` (in `/Users/svetlanabirthisel/Desktop/U2_magister_historia_notebook/`)  
**Style:** Oak & Formal Founding — chestnut/umber oak border, bald eagle at top, founding-era insets, colonial blues and browns, crimson liberty cap accent.  
**Generation history:** B_v1 (wide border) → B_v2 (narrow border) → B_v3 (richer browns/blues) → **B_v4 (crimson liberty cap — ACTIVE)**

---

## GENERATION PROMPT (Final — B_v4 lineage)

### Base prompt (B_v2 — structural generation):

Classical homeschool curriculum notebooking page wrap from "Magister Historia"
(Schola Domestica / Magister Marcus). 3:4 aspect ratio, sized for crisp 8.5x11
printing. Reusable background template — center zone left empty for artwork drop-in.

CRITICAL SPATIAL REQUIREMENT: The decorative border must be NARROW — no wider
than 3/4 inch on any side. The border is a slender frame, not a dominant visual
element. The clean parchment interior must occupy at least 65% of the total page
width and 55% of the total page height. Do NOT let border elements crowd or
overlap the interior.

BACKGROUND & STYLE: Full-bleed antique cream-ivory parchment, slightly cooler
tone than warm sepia. Aged texture with subtle foxing. Formal engraving aesthetic
with fine ink hatching — like an 18th-century broadside or founding-era document,
combined with medieval illuminated manuscript marginalia craft.

BORDER TREATMENT: Slender oak branches with acorn clusters run along all four
sides, staying within the narrow border margin. The oak frame is formal and
architectural. At intervals, SMALL inset marginalia illustrations are nestled
in the branches — fine ink linework with soft watercolor wash. Each inset is
compact and jewel-like — not large standalone illustrations. Do NOT render any
as flat silhouettes.

UNIT 2 OAK BORDER INSETS (8 objects, distributed around border):
- Bald eagle with spread wings (top center — slightly larger than others,
  centered above panel)
- Rattlesnake coiled (bottom center)
- Tricorn hat (top-left)
- Musket and powder horn (top-right)
- Quill pen and inkwell (left, mid)
- Scales of justice (right, mid)
- Drum and drumsticks (bottom-left area)
- Liberty cap on a pole (bottom-right area)

FOUNDING DOCUMENT SCROLLS: Two small rolled parchment scrolls with faint
text suggesting the Declaration of Independence — one tucked in upper-left
branch cluster, one in upper-right.

CORNER OVAL VIGNETTES: At bottom-left and bottom-right corners, small oval
landscape vignettes in the style of illuminated manuscript miniatures:
- Lexington Green at dawn, minute men assembling (BL)
- Independence Hall, Philadelphia, 1776 (BR)

SERIES TITLE (small, top center, Cinzel serif, moss green):
"Magister Historia"
Thin decorative rule beneath.

UNIT HEADER (centered below, Cinzel small-caps, deep sepia):
"UNIT II · THE AMERICAN FOUNDING"

CENTER ILLUSTRATION ZONE: Large rectangular frame with thin architectural
ink border, occupying central two-thirds of page vertically, at least 65%
of page width. Interior clean parchment — leave completely empty.

PAGE TITLE ZONE: Centered blank parchment area beneath illustration frame.
Title added in layout.

RULED LINES: 4–5 evenly spaced ruled lines in faded sepia below title zone,
full width inside border. Aged ink on parchment.

BOTTOM ORNAMENT: Small oak leaf and acorn vignette centered above footer.

FOOTER (small, centered, Cinzel, deep sepia):
"Form IA & Form IIA  •  Notebook Pages"

### Edit 1 — B_v3 (palette shift applied to B_v2):

Keep the entire layout, structure, border design, all illustrated elements,
text, ruled lines, and composition exactly as they are. Change ONLY the color
palette: shift all tones toward richer, deeper browns and warm colonial blues.
The oak branches, acorns, and border frame should be rich chestnut and umber
brown. The background parchment should have a warm ivory-cream tone with subtle
blue-grey undertones. The illustrated insets should have deeper, richer earth
tones — ochre, sienna, warm brown — with accents of colonial blue (Wedgwood
blue, muted slate blue, indigo). The Lexington Green and Independence Hall oval
vignettes should have a painterly depth with richer greens and warmer blues in
the sky. The overall effect should feel like a robust, aged 18th-century
document — bold and patriotic, not pale and delicate.

### Edit 2 — B_v4 (liberty cap color applied to B_v3):

Keep the entire layout, structure, border design, all illustrated elements,
text, ruled lines, composition, and color palette exactly as they are. Make
ONE change only: the liberty cap (Phrygian cap on a pole, on the right side
of the border) must be a vivid, saturated red — bold crimson or scarlet,
clearly red. It should stand out as a strong accent color against the brown
oak border. Do not change anything else.

---

## CONFIRMED ZONE COORDINATES

### V4 Wrap — `NB_U2_PageWrap.jpg` (ACTIVE — used for all final Unit 2 pages)

Detected via long-dark-run scan. Panel borders found as 542px horizontal runs
at y=256 (top) and y=689 (bottom), x=177 left, x=719 right.

| Parameter | Value |
|-----------|-------|
| ZONE_X | 179 |
| ZONE_Y | 258 |
| ZONE_W | 538 |
| ZONE_H | 431 |
| Right edge | x = 717 |
| Bottom edge | y = 689 |
| Title Y center | 729 (midpoint between panel bottom y=689 and first ruled line y=769) |
| Ruled lines | y = 769, 805, 842, 878, 915, 951 |
| Border color | sepia RGB(130, 100, 68), width=2, drawn ON TOP of artwork |
| Title color | moss green RGB(92, 107, 58) |
| Title font | Palatino (system serif fallback) |
| Compositing | crop-to-fill (max scale, center crop) — except page 08 (see below) |
| Wrap size | 896 × 1200 px |
| Output folder | `public/worksheets/unit2/notebooking/` |

### Per-page crop overrides

| Page | Override | Reason |
|------|----------|--------|
| NB_U2_08_BillOfRights | `y_frac=0.15` (top-anchored) | Shows "Congress of the United States" heading + body text |
| All others | `y_frac=0.5` (center crop) | Standard |

---

## COMPOSITING SCRIPT

```python
from PIL import Image, ImageDraw, ImageFont
import os

WRAP_PATH  = "path/to/NB_U2_PageWrap.jpg"
IMG_DIR    = "path/to/source/images"
OUT_DIR    = "path/to/output_pages"

ZONE_X, ZONE_Y = 179, 258
ZONE_W, ZONE_H = 538, 431
TITLE_Y        = 729
MOSS_GREEN     = (92, 107, 58)
BORDER_COLOR   = (130, 100, 68)
FONT_PATH      = "/System/Library/Fonts/Palatino.ttc"

pages = [
    ("NB_U2_01_PaulRevere.jpg.tiff",         "NB_U2_01_PaulRevere.png",              "Paul Revere's Ride — April 18, 1775",           0.5),
    ("NB_U2_02_BostonTeaParty.jpg",           "NB_U2_02_BostonTeaParty.png",          "The Boston Tea Party — December 16, 1773",      0.5),
    ("NB_U2_03_LexingtonMinutemen.jpg",       "NB_U2_03_LexingtonMinutemen.png",      "The Shot Heard Round the World — April 19, 1775", 0.5),
    ("NB_U2_04_Declaration.jpg",              "NB_U2_04_Declaration.png",             "Signing the Declaration — July 4, 1776",        0.5),
    ("NB_U2_05_CrossingDelaware.jpg",         "NB_U2_05_CrossingDelaware.png",        "Washington Crosses the Delaware — December 25, 1776", 0.5),
    ("NB_U2_06_ValleyForge.jpg",              "NB_U2_06_ValleyForge.png",             "Winter at Valley Forge — 1777–1778",            0.5),
    ("NB_U2_07_ConstitutionalConvention.jpg", "NB_U2_07_ConstitutionalConvention.png","The Constitutional Convention — 1787",          0.5),
    ("NB_U2_08_BillOfRights.jpg",             "NB_U2_08_BillOfRights.png",            "The Bill of Rights — 1791",                     0.15),
]

def get_font(size):
    try:    return ImageFont.truetype(FONT_PATH, size)
    except: return ImageFont.load_default()

def fill_to_zone(art, zw, zh, y_frac=0.5):
    """Crop-to-fill. y_frac: 0.0=top, 0.5=center, 1.0=bottom."""
    aw, ah = art.size
    scale  = max(zw/aw, zh/ah)
    nw, nh = int(aw*scale), int(ah*scale)
    r = art.resize((nw, nh), Image.LANCZOS)
    x_off = (nw - zw) // 2
    y_off = int((nh - zh) * y_frac)
    return r.crop((x_off, y_off, x_off + zw, y_off + zh))

for art_file, out_file, title, y_frac in pages:
    base   = Image.open(WRAP_PATH).convert("RGB")
    art    = Image.open(os.path.join(IMG_DIR, art_file)).convert("RGB")
    filled = fill_to_zone(art, ZONE_W, ZONE_H, y_frac)
    base.paste(filled, (ZONE_X, ZONE_Y))

    draw = ImageDraw.Draw(base)
    draw.rectangle([ZONE_X, ZONE_Y, ZONE_X+ZONE_W, ZONE_Y+ZONE_H],
                   outline=BORDER_COLOR, width=2)

    for fs in range(22, 8, -1):
        font = get_font(fs)
        bbox = draw.textbbox((0,0), title, font=font)
        if bbox[2]-bbox[0] <= ZONE_W - 10: break
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    draw.text((ZONE_X + (ZONE_W-tw)//2, TITLE_Y - th//2),
              title, font=font, fill=MOSS_GREEN)

    base.save(os.path.join(OUT_DIR, out_file), "PNG")
    print(f"✓ {out_file}")
```

**Critical rules (same as Unit 1):**
- Always draw the sepia border AFTER pasting artwork, not before
- Use `max()` scale (crop-to-fill), not `min()` (letterbox)
- Save to `output_pages/` subfolder
- Per-page `y_frac` overrides are in the pages list — do not default all to 0.5

---

## GENERATION NOTES

**What worked:**
- Hard-capping border width in the prompt ("no wider than 3/4 inch") was essential — first two generations (v1 A and B) had borders 2–2.5" wide that dominated the page
- Edit mode (image → image) preserved structure perfectly for palette and accent color changes
- Two-step edit chain (v2 → v3 → v4) maintained layout integrity across both edits

**What to watch:**
- The oak border in B_v4 has slightly uneven density — left side slightly heavier than right. Not visually problematic at print size.
- The rattlesnake at the bottom center is contained between the two oval vignettes. Earlier iterations had it too large.
- Bottom oval vignettes (Lexington + Independence Hall) are part of the wrap and should not be covered by composited artwork — the ZONE_H=431 keeps artwork above them.

---

## PER-UNIT MARGINALIA REFERENCE (for Sessions 17, 23)

**Unit 3 — The Early Republic, 1789–1848**
Paddle-wheel steamboat · Iron plow · Covered wagon · Eagle with banner ·
Printing press · Canal lock · Coonskin cap · Surveyor's chain
Corners: Eagle (TL), Steamboat (TR), Covered wagon (BL), Plow (BR)

**Unit 4 — The Civil War Era, 1848–1877**
Rifle and bayonet · Railroad locomotive · Scales of justice · Rolled proclamation ·
Cotton boll · Unbroken shackle · Ballot box · Freedman's primer/book
Corners: Locomotive (TL), Rifle (TR), Ballot box (BL), Scales (BR)
