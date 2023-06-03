curl -X POST 'http://localhost:31577/api/board' \
  -H "Content-Type: application/json" \
  -H 'Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly9naXRodWIuY29tL21zdC1ta3QucG5nIiwiZW1haWwiOiIuQCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2ODU3OTQwNDgsInVzZXJfaWQiOiJPZUZIcmcxcGt0a1pLNUtSRUJSVnJRRVZRRDV4IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyIuQCJdLCJnaXRodWIuY29tIjpbIjQ0MDE4NjA4NjMwNzgwMTMwODc2OTI5OTI0MzgzMjg4NTc5NzExMjkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY4NTc5NDA0OCwiZXhwIjoxNjg2MjI2MDQ4LCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiT2VGSHJnMXBrdGtaSzVLUkVCUlZyUUVWUUQ1eCJ9.' \
  -d '{"x": 0, "y": 0}'

curl -X POST 'http://localhost:31577/api/board' \
  -H "Content-Type: application/json" \
  -H 'Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly92My5mbGUuc3QvYXZhdGFyL2F2YXRhcjEucG5nIiwiZW1haWwiOiJAIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF1dGhfdGltZSI6MTY4NTc5Mzk4NiwidXNlcl9pZCI6IkJrUVI5ZzVQbHpiRXlWRUpteHlQejhnMjROdVIiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIkAiXSwiZ2l0aHViLmNvbSI6WyI1NDc5MTM2MzEyMDIwNzczNDMwMDE1MTY3NDk3NTczMzc2MDc3MDEyIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ2l0aHViLmNvbSJ9LCJpYXQiOjE2ODU3OTM5ODYsImV4cCI6MTY4NjIyNTk4NiwiYXVkIjoiZW11bGF0b3IiLCJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9lbXVsYXRvciIsInN1YiI6IkJrUVI5ZzVQbHpiRXlWRUpteHlQejhnMjROdVIifQ.' \
  -d '{"x": 1, "y": 0}'

Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly9naXRodWIuY29tL21zdC1ta3QucG5nIiwiZW1haWwiOiIuQCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2ODU3OTMzNjYsInVzZXJfaWQiOiJPZUZIcmcxcGt0a1pLNUtSRUJSVnJRRVZRRDV4IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyIuQCJdLCJnaXRodWIuY29tIjpbIjQ0MDE4NjA4NjMwNzgwMTMwODc2OTI5OTI0MzgzMjg4NTc5NzExMjkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY4NTc5MzM2NiwiZXhwIjoxNjg2MjI1MzY2LCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiT2VGSHJnMXBrdGtaSzVLUkVCUlZyUUVWUUQ1eCJ9.
Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly92My5mbGUuc3QvYXZhdGFyL2F2YXRhcjEucG5nIiwiZW1haWwiOiJAIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF1dGhfdGltZSI6MTY4NTc5MzI5MCwidXNlcl9pZCI6IkJrUVI5ZzVQbHpiRXlWRUpteHlQejhnMjROdVIiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIkAiXSwiZ2l0aHViLmNvbSI6WyI1NDc5MTM2MzEyMDIwNzczNDMwMDE1MTY3NDk3NTczMzc2MDc3MDEyIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ2l0aHViLmNvbSJ9LCJpYXQiOjE2ODU3OTMyOTAsImV4cCI6MTY4NjIyNTI5MCwiYXVkIjoiZW11bGF0b3IiLCJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9lbXVsYXRvciIsInN1YiI6IkJrUVI5ZzVQbHpiRXlWRUpteHlQejhnMjROdVIifQ.

curl 'ws://localhost:3000/_next/webpack-hmr' \
  -H 'Pragma: no-cache' \
  -H 'Origin: http://localhost:3000' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Sec-WebSocket-Key: 2+X57QUJ6jaXrnKg03eaSQ==' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36' \
  -H 'Upgrade: websocket' \
  -H 'Cache-Control: no-cache' \
  -H 'Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly9naXRodWIuY29tL21zdC1ta3QucG5nIiwiZW1haWwiOiIuQCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2ODU3OTQwNDgsInVzZXJfaWQiOiJPZUZIcmcxcGt0a1pLNUtSRUJSVnJRRVZRRDV4IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyIuQCJdLCJnaXRodWIuY29tIjpbIjQ0MDE4NjA4NjMwNzgwMTMwODc2OTI5OTI0MzgzMjg4NTc5NzExMjkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY4NTc5NDA0OCwiZXhwIjoxNjg2MjI2MDQ4LCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiT2VGSHJnMXBrdGtaSzVLUkVCUlZyUUVWUUQ1eCJ9.' \
  -H 'Connection: Upgrade' \
  -H 'Sec-WebSocket-Version: 13' \
  -H 'Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits' \
  --compressed ;
curl 'http://localhost:31577/api/tasks' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly9naXRodWIuY29tL21zdC1ta3QucG5nIiwiZW1haWwiOiIuQCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2ODU3OTQwNDgsInVzZXJfaWQiOiJPZUZIcmcxcGt0a1pLNUtSRUJSVnJRRVZRRDV4IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyIuQCJdLCJnaXRodWIuY29tIjpbIjQ0MDE4NjA4NjMwNzgwMTMwODc2OTI5OTI0MzgzMjg4NTc5NzExMjkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY4NTc5NDA0OCwiZXhwIjoxNjg2MjI2MDQ4LCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiT2VGSHJnMXBrdGtaSzVLUkVCUlZyUUVWUUQ1eCJ9.' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --data-raw '{"label":"あ"}' \
  --compressed ;
curl 'http://localhost:31577/api/tasks' \
  -X 'OPTIONS' \
  -H 'Accept: */*' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Access-Control-Request-Headers: content-type' \
  -H 'Access-Control-Request-Method: POST' \
  -H 'Connection: keep-alive' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36' \
  --compressed ;
curl 'http://localhost:31577/api/tasks' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJwaWN0dXJlIjoiaHR0cHM6Ly9naXRodWIuY29tL21zdC1ta3QucG5nIiwiZW1haWwiOiIuQCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2ODU3OTQwNDgsInVzZXJfaWQiOiJPZUZIcmcxcGt0a1pLNUtSRUJSVnJRRVZRRDV4IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyIuQCJdLCJnaXRodWIuY29tIjpbIjQ0MDE4NjA4NjMwNzgwMTMwODc2OTI5OTI0MzgzMjg4NTc5NzExMjkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY4NTc5NDA0OCwiZXhwIjoxNjg2MjI2MDQ4LCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiT2VGSHJnMXBrdGtaSzVLUkVCUlZyUUVWUUQ1eCJ9.' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --compressed