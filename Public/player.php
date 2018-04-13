

<?php

header("Content-Type: application/json");

if (!isset($_GET["key"])) {
    echo '{"access_denied": true}';
    exit();
}

if ($_GET["key"] == "ABC123") {
    if (isset($_GET["tag"])) {
        $access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg0YmY4MGE1LTY4OTQtNGU3ZC04YTI3LWY4OWQ3ZDE1ODgyNSIsImlhdCI6MTUyMzQ2MDQxNSwic3ViIjoiZGV2ZWxvcGVyLzAzMWQwZDgwLThiOWUtZjdmNS02OWVkLTIzYzUxZGIzMTNkYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4LjIxNy4xMjIuMTYxIl0sInR5cGUiOiJjbGllbnQifV19.bppIhQjKVfU2rv7JiZH0RvXDxNpNumQer2AIynLnIFJrJZFPocXzZcmG6o0XVhZakK86qYg6nVviYyEfpZqifg";
        $headers = array("Authorization: Bearer " . $access_token);

		// Initiate connection with API
        $ch = curl_init("https://api.clashofclans.com/v1/players/%23" . $_GET["tag"]);
		// Set the Authorization header
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		// Execute the request (which also echo's it to the user)
        curl_exec($ch);
		// Close request
        curl_close($ch);
    } else {
        echo '{"error": "No "tag" field!"}';
    }
} else {
    echo '{"access_denied": true}';
}