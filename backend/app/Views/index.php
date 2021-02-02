<?php
    $base = "frontend/build/production/eAuthorityApp/";
    if ($_ENV["CI_ENVIRONMENT"] != "production" || !file_exists($base."index.html")){
        $base = "frontend/";
    }
    $html = file_get_contents($base."index.html");
    $pos = strpos($html, "<head>") + 6;
    $base_tag = '<base href="'.$base.'" />';
    $new_html = substr_replace($html, $base_tag, $pos, 0);
    echo $new_html;