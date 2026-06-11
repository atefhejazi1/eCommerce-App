# Move & rename eCommerce screenshots from Downloads to this folder
# Run this script from: D:\Projects\مشاريع رياكت\eCommerce-App\ecommerce_screenshots\
# Just double-click or run: powershell -ExecutionPolicy Bypass -File move_screenshots.ps1

$dest = Split-Path -Parent $MyInvocation.MyCommand.Path
$downloads = "$env:USERPROFILE\Downloads"

$files = @(
  "01_home.png",
  "02_categories.png",
  "03_products.png",
  "05_login.png",
  "06_register.png",
  "07_cart.png",
  "08_wishlist.png",
  "08_wishlist_empty.png",
  "09_about_us.png",
  "10_profile.png",
  "11_orders.png"
)

$moved = 0
foreach ($f in $files) {
  $src = Join-Path $downloads $f
  if (Test-Path $src) {
    Move-Item -Path $src -Destination (Join-Path $dest $f) -Force
    Write-Host "✓ Moved $f" -ForegroundColor Green
    $moved++
  } else {
    Write-Host "✗ Not found: $f" -ForegroundColor Yellow
  }
}

Write-Host ""
Write-Host "Done! Moved $moved / $($files.Count) files to:" -ForegroundColor Cyan
Write-Host $dest -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
