//////////////////////////// interview question //////////////// 

var arr = [1 , 2 ,10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
var AVG;
arr.length % 2 == 0 ? AVG = arr.length / 2 : AVG = (arr.length - 1) / 2
function srch(array, num) {
    if (num >= array[0] && num <= array[array.length - 1]) {
        if (array[AVG] == num) {
            return `index is ${AVG}`
        } if (num > array[AVG]) {
            AVG++
            return srch(array, num)
        } if (num < array[AVG]) {
            AVG--
            return srch(array, num)
        }
    }
    return `num is not exist`
}
console.log(srch(arr, 100))

////////////////////////////////////////////////////
/* Binary Search Tree */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {

                if (node.left == null && node.right == null) {
                    return null;
                }

                if (node.left == null) {
                    return node.right;
                }

                if (node.right == null) {
                    return node.left;
                }

                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}
const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.remove(17)
console.log(bst.find(17))

/////////////////////////////// Hashmap ////////////////////////////

class hashMap {
    constructor(size = 10) {
        this.Storage = new Array(size)
        this.size = size
    }


    hash(str) {
        let total = 0
        for (let i = 0; i < str.length; i++) {
            total += str.charCodeAt(i)
        }
        return total % this.size
    }

    add(key, value) {
        const i = this.hash(key)
        if (!this.Storage[i]) {
            this.Storage[i] = []
        }
        let keyFound = false
        for (let j = 0; j < this.Storage[i].length; j++) {
            if (this.Storage[i][j][0] == key) {
                this.Storage[i][j][1] = value
                keyFound = true
                break
            }
        }
        if (!keyFound) {
            this.Storage[i].push([key, value])
        }
    }
    update(key, value) {
        this.add(key, value)
    }
    delete(key) {
        const i = this.hash(key)
        if (!this.Storage[i]) {
            throw Error("key not found ")
        }
        let keyFound = false
        for (let j = 0; j < this.Storage[i].length; j++) {
            if (this.Storage[i][j][0] == key) {
                this.Storage[i].splice(j, 1)
                keyFound = true
                break
            }
        }
        if (!keyFound) {
            throw Error("key not found ")

        }
    }
    get(key) {
        const i = this.hash(key)
        if (!this.Storage[i]) {
            throw Error("key not found ")
        }
        let keyFound = false
        for (let j = 0; j < this.Storage[i].length; j++) {
            if (this.Storage[i][j][0] == key) {
                return this.Storage[i][j]
                keyFound = true
                break
            }
        }
        if (!keyFound) {
            throw Error("key not found ")
        }
    }
}

var hm = new hashMap(5)
hm.add("sika", 25)
hm.add("mahmoud", 30)
hm.delete("mahmoud")

hm.add("ali", 40)
hm.add("omar", 90)
console.log(hm.get("ali"))