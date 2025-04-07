class Icon {
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

class Video {
  constructor(src) {
    this.src = src;
  }

  generate = (root) => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://youtube.com/embed/" + this.src;
    iframe.title = "YouTube video player";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.id = "videoCard";

    const div = document.createElement("div");
    div.appendChild(iframe);

    root.appendChild(div);
  };
}

const getEmailLink = () => {
  const username = "bojan";
  const domain = "bojanmilevski";
  const tld = "com";
  const email = username + "@" + domain + "." + tld;
  return "mailto:" + email;
};

const generate = (div, array) => {
  const root = document.getElementById(div);

  array.forEach((element) => {
    element.generate(root);
  });
};

generate("icons", [
  new Icon(getEmailLink(), "cod-mail"),
  new Icon("https://linkedin.com/in/bojan-milevski-b81842283", "md-linkedin"),
  new Icon("https://github.com/bojanmilevski", "md-github"),
  new Icon("https://gitlab.com/bojanmilevski", "md-gitlab"),
]);

generate("movies", [
  new Video("6MUcuqbGTxc"),
  new Video("07-QBnEkgXU"),
  new Video("r3dcnV6Z9Zs"),
  new Video("Z06d-ftqO2Y"),
  new Video("3UnSXelOJo0"),
  new Video("abUgHWAaBFU"),
]);

generate("music", [
  new Video("HpAIDSSc_Y0"),
  new Video("VFle9mIRhFs"),
  new Video("RQWLTqlTmrE"),
  new Video("kQoKO_v93g0"),
]);
