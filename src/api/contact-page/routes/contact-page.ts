export default { routes: [{ method: 'GET', path: '/contact-page', handler: 'contact-page.find', config: { auth: false } }, { method: 'PUT', path: '/contact-page', handler: 'contact-page.update' }] };
