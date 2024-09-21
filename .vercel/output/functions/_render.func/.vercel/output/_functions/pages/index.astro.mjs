import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_CkX1ybMs.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { neon } from '@neondatabase/serverless';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/casti/Main/Dev/faithful-force/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const sql = neon(
    "postgresql://Programs-db_owner:gt7QxJLNI4rP@ep-shrill-brook-a5j8odhx.us-east-2.aws.neon.tech/Programs-db?sslmode=require"
  );
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const author = formData.get("author");
    const content = formData.get("content");
    if (typeof author === "string" && typeof content === "string") {
      try {
        const response = await sql`
                INSERT INTO programas (nombre, link_de_imagen, link_de_descarga, detalles)
                VALUES (${author}, ${content}, ${content}, ${author})  
                RETURNING *`;
        console.log("Programa guardado:", response);
      } catch (error) {
        console.error("Error al guardar el programa:", error);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<main> <form method="POST" style="display: grid" enctype="multipart/form-data"> <label for="author">Autor</label> <input id="author" name="author"> <textarea name="content"></textarea> <button type="submit">Enviar</button> </form> </main>`;
}, "C:/Users/casti/Main/Dev/faithful-force/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/casti/Main/Dev/faithful-force/src/pages/index.astro", void 0);

const $$file = "C:/Users/casti/Main/Dev/faithful-force/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
