const Home = (server) => { 
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', { title: 'Halaman Beranda' });
        }
    });
};


export default Home;