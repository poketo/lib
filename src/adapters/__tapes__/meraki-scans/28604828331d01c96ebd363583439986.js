var path = require("path");

/**
 * GET /ninja-shinobu-san-no-junjou
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: merakiscans.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Thu, 30 Aug 2018 05:06:04 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=da7c512a32dadf7cdb57431e552ed15c31535605564; expires=Fri, 30-Aug-19 05:06:04 GMT; path=/; domain=.merakiscans.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
  res.setHeader("link", "<http://merakiscans.com/?p=1277>; rel=shortlink");
  res.setHeader("x-cache", "HIT from Backend");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4524b9d850f19649-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("wm2IJ9wQAz0jC0sTM4Xi1OT8vJRi7E52rSgAF+IIuxXAR1uYkGA56IoD3aDUpNLMHLgnCJkBMcQHvGpAoSwzEWoeVDfI/8YGSNpNrQxMQavVUJyAoRvqdwM9AwMTSyNkjwMAAAD//w==", "base64"));
  res.write(new Buffer("AwBPkpN7EZgAAA==", "base64"));
  res.end();

  return __filename;
};