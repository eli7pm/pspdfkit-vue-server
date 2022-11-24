const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

//third-party library to generate a JWT Token
const jwt = require('jsonwebtoken');
const jwtKey = fs.readFileSync(path.resolve(__dirname, "../config/pspdfkit/jwt.pem"));

//Function to generate the JWT Token
const prepareJwt = (documentId)=>{
      const claims = {
            document_id: documentId,
            permissions: ["read-document", "write", "download"],
          };

          return jwt.sign(claims, jwtKey, {
            algorithm: "RS256",
            expiresIn: 3 * 24 * 60 * 60, // 3 days
          });
    };

//Getting the document list from the PSPDFKit Server dashboard
const getDocumentList = async (url)=>{
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic ZGFzaGJvYXJkOnNlY3JldA==");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const data = await fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));

  return data
}

//Document endpoint to always render the main index.html file
router.get('/documents/:id',(req, res)=>{
  res.sendFile('index.html', {root: './src/public'});
});

//Endpoint for JWT Token
router.get('/webtoken/:docId',(req,res)=>{
  const jwtToken = prepareJwt(req.params.docId)
  res.send(jwtToken);
});

//Get document list endpoint in homepage
router.get("/getdocuments",async (req,res)=>{
  const data = await getDocumentList("http://localhost:5000/dashboard/api/documents?limit=15&offset=0&sortField=createdAt&sortAsc=false")
  res.send(data);
})

module.exports = router;
