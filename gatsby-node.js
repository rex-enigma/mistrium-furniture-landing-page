

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {

    const node = {
        ...headerData,
        id: createNodeId(`${headerData.title}`),
        internal: {
            type: 'headerData',
            contentDigest: createContentDigest(headerData),
        },
    };

    actions.createNode(node);

    featuredDataNodes.forEach(featuredProductDataNode => {
        const node = {
            name: featuredProductDataNode.name,
            bgColor: featuredProductDataNode.bgColor,
            key:featuredProductDataNode.key,
            id: createNodeId(`featuredProductDataNode-${featuredProductDataNode.name}`),
            internal: {
                type: 'featuredProductDataNode',
                contentDigest: createContentDigest(featuredProductDataNode),
            },
        };
        actions.createNode(node);
    });

    productDataNodes.forEach(productDataNode => {
        const node = {
            name: productDataNode.name,
            currentPrice: productDataNode.currentPrice,
            previousPrice: productDataNode.previousPrice,
            key: productDataNode.key,
            id: createNodeId(`productDataNode-${productDataNode.name}`),
            internal: {
                type: 'productDataNode',
                contentDigest: createContentDigest(productDataNode),
            },
        };
        actions.createNode(node);
    });

};


const headerData = {
    title:'Modern Furniture For Modern Living Style',
    subtitle:'In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwellingxas on raillery.'
};

const featuredDataNodes = [
    {
        name: 'Residential Furniture',
        bgColor: '#FCEFE9',
        key:'residential-featuredFurniture',
    },
    {
        name: 'Hospitality Furniture',
        bgColor: '#FAE2C8',
        key:'hp-featuredFurniture',
    }
  ];


 const productDataNodes = [
    {
        name: 'Ramen Stool',
        currentPrice:'$65.00',
        previousPrice: '$95.00',
        key:'ramen-stool-product',
    
    },
    {
        name: 'Flexform',
        currentPrice:'$35.00',
        previousPrice: '$55.00',
        key:'flexform-product',
    
    },
    {
        name: 'Porada',
        currentPrice:'$87.00',
        previousPrice: '$97.00',
        key:'porada-product',
    
    },
    {
        name: 'Amora',
        currentPrice:'$65.00',
        previousPrice: '$95.00',
        key:'amora-product',
    
    },
    {
        name: 'Taknion',
        currentPrice:'$45.00',
        previousPrice: '$55.00',
        key:'taknoin-product'
    
    },
    {
        name: 'Liquid Contract',
        currentPrice:'$35.00',
        previousPrice: '$45.00',
        key:'liquid-contract-product',
    
    },
];

