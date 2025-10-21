<h2 style="text-align: center;">GameDistribution&rarr; API URL Builder</h2>
<div class="container"><header>
<p>Paste your URLs using comma as separator. After submission, we show you the correct API Link</p>
</header><form id="form">
<p><label for="input"></label>Example when you insert more than 2 games, Please be aware of COMMA:</p>
<p>https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/<span style="background-color: #ff0000;">,</span>https://html5.gamedistribution.com/882e8405283041b7922818fa6ff892b6/</p>
<p>&nbsp;</p>
<div class="row" style="margin-top: 12px;"><button class="btn" type="submit">Build API URL</button> <button id="clear" class="btn secondary" type="button">Clear</button></div>
</form>
<section id="result" style="margin-top: 20px; display: none;">
<div class="card" style="margin-bottom: 12px;"><strong>Generated API URL</strong> <span id="count-pill" class="pill" title="Total unique IDs extracted">0 IDs</span>
<div id="api-url" class="out" style="margin-top: 8px;">&mdash;</div>
<div class="row" style="margin-top: 10px;"><a id="open-link" class="btn secondary" style="display: none;" href="#" target="_blank" rel="noopener">Open in new tab</a> <button id="copy" class="btn secondary" style="display: none;" type="button">Copy link</button></div>
</div>
<details>
<summary style="cursor: pointer; font-weight: 600;">Parsing details</summary>
<div style="margin-top: 8px;">
<table>
<thead>
<tr>
<th style="width: 55%;">Original item</th>
<th style="width: 45%;">Detected ID / Status</th>
</tr>
</thead>
<tbody id="rows"><!-- filled by JS --></tbody>
</table>
</div>
</details>
<div class="footer-note">Base: <code>https://catalog.api.gamedistribution.com/api/v1.0/rss/get/all?games=</code> &bull; Suffix: <code>&amp;format=Json</code></div>
</section>
</div>
