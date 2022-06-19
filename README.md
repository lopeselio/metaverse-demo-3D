# Land Sales Demo With 
React Three Fiber + Solidity + Polygon Blockchain

**A 3D virtual estate platform to buy virtual estate, powered by Polygon Blockchain**

![image](https://user-images.githubusercontent.com/43913734/174479791-098527e6-9832-47ec-be3d-fc1a6dc5cb36.png)

- Front-end is written in React and React Three Fiber
- Smart contracts are written using Solidity and OpenZeppelin standard contracts
- web3 js is used to interface with deployed contracts. Congrats have been tested and deployed using truffle suite.
- The ERC-721 token is deployed as ITVB (IntoTheVerse Building Token)
- Our Smart contract is deployed to Polygon Mumbai TestNetWork at [https://mumbai.polygonscan.com/tx/0xae5c5efb29bc2bfb2924263b3af355dab179cdb5799727ae8e15cb7b0ad8bebf](https://mumbai.polygonscan.com/tx/0xae5c5efb29bc2bfb2924263b3af355dab179cdb5799727ae8e15cb7b0ad8bebf)

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/174480961-ab1e3c14-67f1-44de-93fe-284268485a62.png">


  
- You can view the mint tranaction here: [https://mumbai.polygonscan.com/tx/0xfe80483ab6cc8d55415111b85ac5ddebaa94ebd942803e16835c3f52436d0f6a](https://mumbai.polygonscan.com/tx/0xfe80483ab6cc8d55415111b85ac5ddebaa94ebd942803e16835c3f52436d0f6a)

# Screenshots 
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/174480729-36a6cc06-10ab-45b8-b471-ee7f5ebf37b2.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/174481326-d45e9483-27b6-4930-a8de-9ef85e476f82.png">

- While buying a plot of land on the blockchain, the buyer has to pay 1 MATIC token as fee along with small amount of gas to pay for the network transactions. 
- After the plot has been minted, we see a 3D house (.GLTF) asset upright. In the bottom, we also see that the plot has already been owned by the buyer (Check the connected wallet address and the owner address in the bottom right tab match with each other)
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/174481358-b01f3afc-d4e7-4dbe-845e-7030ea52a7ef.png">

- If the plot is not owned, the details do not show up in the tab.
- If you want to purchase the plot that is already owned on the virtual estate metaverse, you are not allowed to do so. 
- You can however mint other plots of land in the metaverse
- If there is an error occuring while buying, we get a notification 
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/43913734/174481379-24642904-b8d4-4bb3-b6d0-f43eac023280.png">
