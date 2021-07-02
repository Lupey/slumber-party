import express from 'express';
import { addUser, deleteUser, getFullUserList, getUserInfo, updateUser } from '../services/userService';
import { UserState } from '../types/UserState.enum';

const router = express.Router();

router.get('/info', (req, res) => {
  const id = req.query.id as string;

  if (!id) {
    res.sendStatus(400);
    return;
  }

  const info = getUserInfo(id);

  res.send(info);
});

router.post('/new', (req, res) => {
  const name = req.body.name as string;

  if (!name) {
    res.sendStatus(400);
    return;
  }

  const id = addUser(name);

  res.send({ id });
});

router.post('/update', (req, res) => {
  const id = req.body.id as string;
  const state = req.body.state as UserState;

  if (!id || !state) {
    res.sendStatus(400);
    return;
  }

  updateUser(id, state);

  res.sendStatus(200);
});

router.get('/list', (req, res) => {
  const list = getFullUserList();

  res.send(list);
});

router.delete('/delete', (req, res) => {
  const id = req.body.id as string;

  if (!id) {
    res.sendStatus(400);
    return;
  }

  deleteUser(id);

  res.sendStatus(200);
});

export default router;
