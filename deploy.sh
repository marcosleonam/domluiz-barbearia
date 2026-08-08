#!/usr/bin/env bash
# Deploy do site pro GitHub Pages (branch gh-pages).
#
# Uso:
#   ./deploy.sh                          -> publica em marcosleonam.github.io/domluiz-barbearia/
#   DOMINIO=domluiz.postflowia.com.br ./deploy.sh   -> publica com domínio próprio
#
# Quando DOMINIO é passado, o script grava o arquivo CNAME no build (é assim que
# o GitHub Pages sabe responder pelo domínio). Falta só apontar o DNS:
#   - subdomínio  -> registro CNAME  <sub>  ->  marcosleonam.github.io
#   - domínio raiz-> registros A     @      ->  185.199.108.153, 185.199.109.153,
#                                               185.199.110.153, 185.199.111.153
# Depois, em Settings > Pages, marcar "Enforce HTTPS" (o certificado sai sozinho
# em alguns minutos).
set -euo pipefail

REPO="https://github.com/marcosleonam/domluiz-barbearia.git"
TMP="$(mktemp -d)"

cd "$(dirname "$0")"
npm run build

cp -r dist/. "$TMP/"
touch "$TMP/.nojekyll"   # sem isso o GitHub ignora pastas com _

if [ -n "${DOMINIO:-}" ]; then
  echo "$DOMINIO" > "$TMP/CNAME"
  echo "→ CNAME gravado: $DOMINIO"
fi

cd "$TMP"
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.email="leonammlnl@gmail.com" -c user.name="Marcos Leonam" \
    commit -q -m "deploy: $(date +%Y-%m-%d\ %H:%M)"
git remote add origin "$REPO"
git push -qf origin gh-pages

echo "✓ publicado"
[ -n "${DOMINIO:-}" ] && echo "  https://$DOMINIO" || echo "  https://marcosleonam.github.io/domluiz-barbearia/"
rm -rf "$TMP"
