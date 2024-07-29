class Link {
  constructor(url, icon) {
    this.url = url;
    this.icon = icon;
  }

  generate = (root) => {
    const i = document.createElement("i");
    i.className = "nf nf-" + this.icon;
    i.id = "icon";

    const a = document.createElement("a");
    a.href = this.url;
    a.appendChild(i);

    const div = document.createElement("div");
    div.appendChild(a);

    root.appendChild(div);
  };
}

class Music {
  constructor(src) {
    this.src = src;
  }

  generate = (root) => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://youtube.com/embed/" + this.src;
    iframe.width = 400;
    iframe.height = 200;
    iframe.title = "YouTube video player";
    iframe.frameborder = 0;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    const div = document.createElement("div");
    div.id = "musicStyle";
    div.appendChild(iframe);

    root.appendChild(div);
  };
}

const generateIcons = () => {
  const root = document.getElementById("icons");

  const links = [
    new Link("mailto:bojan@bojanmilevski.com", "cod-mail"),
    new Link("https://github.com/bojanmilevski", "md-github"),
    new Link("https://linkedin.com/in/bojan-milevski-b81842283", "md-linkedin"),
    new Link("https://facebook.com/bojanmilevskii", "fa-facebook_square"),
    new Link("https://instagram.com/bojanmilevskii", "md-instagram"),
    new Link("https://x.com/bojanmilevskii", "fa-twitter_square"),
    new Link("https://reddit.com/user/bojanmilevskii", "md-reddit"),
    new Link("https://discord.com/users/1085313022999928892", "fa-discord"),
    new Link("https://youtube.com/@bojanmilevski", "md-youtube"),
    new Link("https://odysee.com/@bojanmilevski", "fa-user_astronaut"),
    new Link("https://open.spotify.com/user/31uf7k245w4wmow4thq7z3dvzdaq?si=797e99aca7d74f82", "md-spotify"),
  ];

  links.forEach((link) => {
    link.generate(root);
  });
};

const generateMusic = () => {
  const root = document.getElementById("music");

  const music = [
    new Music("HpAIDSSc_Y0"),
    new Music("VFle9mIRhFs"),
    new Music("RQWLTqlTmrE"),
    new Music("kQoKO_v93g0"),
  ];

  music.forEach((m) => {
    m.generate(root);
  });
};

generateIcons();
generateMusic();
