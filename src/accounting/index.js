#!/usr/bin/env node

let balance = 1000.0;

function credit(amount) {
  if (!Number.isFinite(amount) || amount <= 0) throw new Error('Credit amount must be positive');
  balance += amount;
  return balance;
}

function debit(amount) {
  if (!Number.isFinite(amount) || amount <= 0) throw new Error('Debit amount must be positive');
  if (amount > balance) throw new Error('Insufficient funds');
  balance -= amount;
  return balance;
}

function getBalance() {
  return balance;
}

module.exports = { credit, debit, getBalance };
