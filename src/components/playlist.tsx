function Playlist() {
    return (
        <div className="hidden lg:block">
            <iframe
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/album/3SJPNJ3dMplHK8UeFy295k?utm_source=generator"
                width="100%"
                height={430}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                />
        </div>
    )
}

export default Playlist