let nodes = [];
let tree;
let space = 40;
let levels;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  textAlign(CENTER);

  // generating random node values
  for (let i = 0; i < 10; i++) nodes.push(new Node(floor(random(10, 100))));

  // Creating a binary Search Tree with the values
  tree = nodes[0];
  tree.pos.x = 0;
  tree.pos.y = 50;
  for (let i = 1; i < nodes.length; i++) addToTree(tree, nodes[i]);

  // Test-code to check if the tree is created as intended
  console.log("Node Values: " + nodes.map((ele) => ele.val));
  console.log("Tree: ", tree);
  console.log("Inoder: " + inorder(nodes[0], []));

  levels = levelOrder(tree, 0, []);
  for (let node of levels.flat()) console.log(node.val);
}

function draw() {
  background(0);
  translate(width / 2, 50);

  //Drawing the tree
  tree.show(tree);

  // for (let i = 1; i < levels.length; i++) {
  //   let level = levels[i];

  //   for(let n of level){
  //     for(let other of level){
  //       n.arrange(other)
  //     }
  //   }

  //   // if(node.left && node.right)
  //   // node.left.arrange(node.right);
  // }
}

// Recursive function to create tree
function addToTree(root, node) {
  if (root !== null) {
    if (root.left === null && root.val > node.val) {
      root.left = node;
      node.parent = root;
      node.pos.x = root.pos.x - space;
      node.pos.y = root.pos.y + space;
      return;
    } else if (root.right === null && root.val < node.val) {
      root.right = node;
      node.parent = root;
      node.pos.x = root.pos.x + space;
      node.pos.y = root.pos.y + space;
      return;
    }

    if (root.val > node.val) addToTree(root.left, node);
    else addToTree(root.right, node);
  }
}

// Recursive function for Inorder traversal of the tree
const inorder = function (node, arr) {
  if (node != null) {
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
    return arr;
  }
};

const levelOrder = function (root) {
  const levels = [];

  const order = function (root, level, arr) {
    if (root == null) return arr;
    if (arr[level] == undefined) {
      arr[level] = [];
    }

    arr[level].push(root);
    if (root.left) order(root.left, level + 1, arr);
    if (root.right) order(root.right, level + 1, arr);

    return arr;
  };

  return order(root, 0, levels);
};

// PROBLEMS SO FAR..
// 1. Nodes are overlaping while drawing
