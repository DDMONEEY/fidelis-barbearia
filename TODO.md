# TODO — Fidelis Barbershop

## Site institucional e conversão
- [x] Página inicial profissional criada para a Fidelis Barbershop, com o nome e a proposta pública “Elevated grooming — Premium experience”.
- [x] Chamadas para agendamento e contato implementadas, com o link público da barbearia no Booksy em destaque.
- [x] Seção de serviços criada com cortes, fades, barba e cortes infantis, sem preços ou durações não verificados.
- [x] Localização criada com o endereço público `52A Court St, Plymouth, Massachusetts` e link de rota no mapa.
- [x] Canais públicos verificáveis incluídos: Instagram e agendamento online; nenhum telefone ou e-mail foi inventado.
- [x] Galeria responsiva criada com imagens recortadas da referência fornecida pelo usuário.

## Idiomas e responsividade
- [x] Inglês configurado como idioma padrão.
- [x] Seletor funcional implementado para inglês, espanhol, português e francês, incluindo conteúdo, rótulos acessíveis e o atributo semântico de idioma da página.
- [x] Layout responsivo, acessível, com navegação direta e CTA de reserva persistente em dispositivos móveis.

## Qualidade técnica e entrega
- [x] Manifesto estático `manus-routes.json` servido para a rota pública `/`.
- [x] Metadados básicos e título configurados para o site público.
- [x] Validação concluída: `pnpm check`, `pnpm test` (6 testes aprovados), `pnpm build:static`, verificação de assets/manifesto e inspeção visual em desktop e mobile.
- [x] Configuração de deploy estático da Vercel adicionada em `vercel.json`, usando `pnpm build:static` e `dist/public`.
- [x] Imagens do site configuradas para carregar primeiro de `/images/`, incluídas no repositório e no build, sem depender do armazenamento de preview.
- [x] Criar checkpoint no repositório canônico após validação.
