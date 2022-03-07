This file has instructions for deploying the MPC-contract and MPC-app.

## Step-1: Google Chrome:
Link to download: https://www.google.com/chrome/
## Step-2: Node.js (Version: 16.13 or later) 
Link to download: https://nodejs.org/en/download/ 
## Step-3: Truffle (Version: 5.1.44): 
Reference Link: https://www.trufflesuite.com/docs/truffle/getting-started/installation 

Else, you can run: `npm i -g truffle` in your terminal.
## Step-4: Install Ganache
  Use the following link to install Ganache on your system: https://trufflesuite.com/ganache/index.html
## Step-5: MetaMask
  Make sure you have the latest version of MetaMask installed: https://metamask.io/download/
## Step-6: Installing the Code
  Go to a location on your system where you want to save this code.
  
  Open the terminal in this location.
  
  Run: `git clone https://github.com/BinaRam/topcoder.git`
  
  Then run: `git remote -v`
  
  <img width="399" alt="git remote -v" src="https://user-images.githubusercontent.com/37501487/157112290-8b96cb69-df34-45d7-ad96-20ab8888e373.png">
  
  You should be able to seen an output like this.
  
  Now open the Ganache Application on your system and click on 'Quickstart'. 
  (Make sure the Ganache test chain services are enabled on the localhost:7545 port and linked to the web UI by MetaMask). 
  
  You may have to reconnect using 12 seed words of the Ganache test chain. Click MetaMask, and make sure that MetaMask is on Ganache. Go to account 1, and log out. 
  
  By clicking Import account by using seed phrase, copy the seed words from the top of the Ganache GUI, and use them to link MetaMask to the local Ganache test chain.
  
 ## Step-7: Running the Code
  
  From the base directory MPC-Dapp, enter the following commands:
  ```
    cd MPC-contract
    (rm –r build/ for subsequent builds)
    truffle migrate --reset
   ```
    
  To start web server via Node.js, enter the following commands:
  ```
    cd MPC-app
    npm install
    npm start
   ```
    
  Once this command is executed, you should see: 
  
  <img width="264" alt="npm start" src="https://user-images.githubusercontent.com/37501487/157113422-b46f6c2b-b7ef-44f5-a390-afd9321d5cca.png">
  
  Start a browser at localhost:3000 to interact with the DApp.

