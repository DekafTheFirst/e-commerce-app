const products = [
  {
    _id: "1",
    name: "Nissan GT-R",
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Nissan-GT-R-Nismo-Transparent-Background.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 1240000,
    countInStock: 2,
    rating: 4.5,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Dodge Charger Hellcat",
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Dodge-Charger-Hellcat-PNG-Background.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 4500000,
    countInStock: 6,
    rating: 5,
    numReviews: 3,
  },
  {
    _id: "3",
    name: "Lamborghini Aventador",
    image:
      "https://www.pngplay.com/wp-content/uploads/12/Lamborghini-PNG-Images-HD.png",
    price: 5600000,
    countInStock: 6,
    rating: 5,
    numReviews: 3,
  },
  {
    _id: "4",
    name: "Porsche 911",
    image:
      "https://www.pngplay.com/wp-content/uploads/12/Porsche-PNG-HD-Free-File-Download.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 6500000,
    countInStock: 6,
    rating: 5,
    numReviews: 3,
  },
  {
    _id: "5",
    name: "Ford Mustang",
    image:
      "https://www.pngplay.com/wp-content/uploads/12/Ford-Mustang-Clip-Art-Transparent-File.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 3000000,
    countInStock: 2,
    rating: 4,
    numReviews: 7,
  },
  {
    _id: "6",
    name: "Mercedes AMG GT",
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Mercedes-Benz-AMG-Transparent-Free-PNG.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 5400000,
    countInStock: 6,
    rating: 5,
    numReviews: 3,
  },
  {
    _id: "7",
    name: "2019 toyota camry",
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Toyota-Supra-2020-PNG-HD-Quality.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 1500000,
    countInStock: 6,
    rating: 4,
    numReviews: 5,
  },
  {
    _id: "8",
    name: "Ferrari 418 Italia",
    image:
      "https://www.pngplay.com/wp-content/uploads/2/Ferrari-Background-PNG.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 6000000,
    countInStock: 6,
    rating: 4,
    numReviews: 8,
  },
  {
    _id: "9",
    name: "2018 Dodge Challenger SRT Demon",
    image:
      "https://www.pngplay.com/wp-content/uploads/13/Dodge-Demon-Transparent-File.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 4500000,
    countInStock: 6,
    rating: 4,
    numReviews: 3,
  },
  {
    _id: "10",
    name: "McLaren 570s",
    image:
      "https://www.pngplay.com/wp-content/uploads/9/Mclaren-P1-PNG-Images-HD.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum nunc, vestibulum ut dui id, consequat bibendum tortor. Aliquam quis ex mollis, efficitur magna vitae, dapibus ipsum. Phasellus pretium, mi sit amet vehicula varius, nisl mi efficitur nibh, at rutrum ipsum ipsum in augue. Maecenas pharetra, lectus vitae feugiat pretium, leo odio feugiat est, eu dapibus enim nisl in massa. Vivamus dictum in nulla at lacinia. Nam porttitor imperdiet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo ut diam egestas malesuada. Quisque id nisi vitae nisl lacinia ornare eget non nunc.",
    price: 6500000,
    countInStock: 6,
    rating: 5,
    numReviews: 10,
  },
];

export default products;
