const mongodb = require ('../db/connect')
const UserId = require ('mongodb').ObjectId

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('week2').collection('WebServicesCollection').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
      console.log(lists)
    });
  };

const getOne = async (req, res, next) => { 
  const userId = new UserId (req.params.id)
  const result = await mongodb.getDb().db('week2').collection('WebServicesCollection').find({_id: userId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
    console.log(lists[0])
  })
}

const createContact = async (req, res, next) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday}
  const result = await mongodb.getDb().db('week2').collection('WebServicesCollection').insertOne(contact);
  console.log(result);
  if (result.acknowledged) {
    res.status(201).json(result);
  } 
  else {
    res.status(500).json(result.error)}
}

const updateContact = async (req, res, next) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday}
  const userId = new UserId (req.params.id)
  const result = await mongodb.getDb().db('week2').collection('WebServicesCollection').replaceOne({_id: userId}, contact);
  console.log(result);
  if (result.modifiedCount > 0) {
    res.status(204).send();
  } 
  else {
    res.status(500).json(result.error)}
  }


  const deleteContact = async (req, res, next) => {
    const userId = new UserId(req.params.id);
    const result = await mongodb.getDb().db('week2').collection('WebServicesCollection').remove({ _id: userId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(204).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  };

module.exports = {getAll, getOne, createContact, deleteContact, updateContact}

// 