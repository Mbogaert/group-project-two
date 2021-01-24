const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content: "Nam nisl ipsum, bibendum ac.",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    content: "Donec malesuada augue eu venenatis.",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    content: "Nam bibendum elementum arcu ac.",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    content: "Pellentesque finibus nibh eu nibh.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    content: "Aenean purus magna, posuere a.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "Ut vehicula a enim et.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content: "Nulla lobortis elit vitae risus.",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    content: "Mauris mi purus, ornare in sapien non, pulvinar placerat sem.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    content: "Aliquam mollis posuere bibendum.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content:
      " Nam semper, nunc at feugiat porta, metus arcu molestie lorem, sit amet gravida nulla velit sit amet est.",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    content: "Aliquam interdum metus vel tincidunt pretium.",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    content:
      "Vestibulum tortor est, tincidunt id accumsan at, efficitur at massa.",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    content: "Etiam rutrum laoreet purus, id congue leo faucibus vitae.",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    content: "Sed tincidunt lacus ac dui ornare, ac blandit eros feugiat.",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    content: "Donec placerat sollicitudin orci non gravida.",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "Morbi dictum arcu nunc, et hendrerit ligula porttitor eget.",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    content: "Aliquam interdum metus vel tincidunt pretium.",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    content: "Sed egestas porta metus, at mollis libero.",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content:
      "Suspendisse justo est, elementum non nunc non, scelerisque convallis nisi.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
