exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const node = {
    ...headerData,
    id: createNodeId(`${headerData.title}`),
    internal: {
      type: "headerData",
      contentDigest: createContentDigest(headerData),
    },
  };

  actions.createNode(node);

  featuredDataNodes.forEach((featuredProductDataNode) => {
    const node = {
      name: featuredProductDataNode.name,
      bgColor: featuredProductDataNode.bgColor,
      key: featuredProductDataNode.key,
      id: createNodeId(
        `featuredProductDataNode-${featuredProductDataNode.name}`
      ),
      internal: {
        type: "featuredProductDataNode",
        contentDigest: createContentDigest(featuredProductDataNode),
      },
    };
    actions.createNode(node);
  });

  productDataNodes.forEach((productDataNode) => {
    const node = {
      name: productDataNode.name,
      currentPrice: productDataNode.currentPrice,
      previousPrice: productDataNode.previousPrice,
      key: productDataNode.key,
      id: createNodeId(`productDataNode-${productDataNode.name}`),
      internal: {
        type: "productDataNode",
        contentDigest: createContentDigest(productDataNode),
      },
    };
    actions.createNode(node);
  });

  commentDataNodes.forEach((commentDataNode) => {
    const node = {
      ...commentDataNode,
      id: createNodeId(`commentDataNode-${commentDataNode.name}`),
      internal: {
        type: "commentDataNode",
        contentDigest: createContentDigest(commentDataNode),
      },
    };
    actions.createNode(node);
  });
};

const headerData = {
  title: "Modern Furniture For Modern Living Style",
  subtitle:
    "In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwellingxas on raillery.",
};

const featuredDataNodes = [
  {
    name: "Residential Furniture",
    bgColor: "#FCEFE9",
    key: "residential-featuredFurniture",
  },
  {
    name: "Hospitality Furniture",
    bgColor: "#FAE2C8",
    key: "hp-featuredFurniture",
  },
];

const productDataNodes = [
  {
    name: "Ramen Stool",
    currentPrice: "$65.00",
    previousPrice: "$95.00",
    key: "ramen-stool-product",
  },
  {
    name: "Flexform",
    currentPrice: "$35.00",
    previousPrice: "$55.00",
    key: "flexform-product",
  },
  {
    name: "Porada",
    currentPrice: "$87.00",
    previousPrice: "$97.00",
    key: "porada-product",
  },
  {
    name: "Amora",
    currentPrice: "$65.00",
    previousPrice: "$95.00",
    key: "amora-product",
  },
  {
    name: "Taknion",
    currentPrice: "$45.00",
    previousPrice: "$55.00",
    key: "taknoin-product",
  },
  {
    name: "Liquid Contract",
    currentPrice: "$35.00",
    previousPrice: "$45.00",
    key: "liquid-contract-product",
  },
];

const commentDataNodes = [
  {
    name: "Mike Taylor",
    date: "20 january 2020",
    stars: 5,
    comment:
      "Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on.",
    key: "commentAvatar1",
  },
  {
    name: "Jane bee",
    date: "2 september 2020",
    stars: 3,
    comment:
      "Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw",
    key: "commentAvatar2",
  },
  {
    name: "amanda",
    date: "2 june 2020",
    stars: 3,
    comment:
      "speedily ignorant any steepest. Admiration  invitation reasonably up do of prosperous in. Shy saw",
    key: "commentAvatar3",
  },
  {
    name: "mery",
    date: "2 march 2020",
    stars: 2,
    comment:
      "Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up",
    key: "commentAvatar4",
  },
];
