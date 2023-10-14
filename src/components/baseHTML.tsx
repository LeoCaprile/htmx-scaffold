import Html from "@kitajs/html";

export const BaseHTML = ({
  children,
  title = "Webapp",
}: Html.PropsWithChildren<{ title?: string }>) => (
  <>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/public/dist/unocss.css" />
        <script src="/public/htmx@1.9.6.min.js" />
        <title>{title}</title>
      </head>
      <body hx-boost="true">{children}</body>
    </html>
  </>
);
