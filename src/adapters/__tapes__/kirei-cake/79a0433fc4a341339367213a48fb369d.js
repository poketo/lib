var path = require("path");

/**
 * GET /api/reader/comic/stub/masamunekuns_revenge/format/json
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: reader.kireicake.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Mon, 03 Sep 2018 01:49:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-powered-by", "PHP/5.6.34");
  res.setHeader("set-cookie", ["ci_session=S6UOE7DHKprlKAFst%2FK5lzBibc5S2YEKoI3RifW5E8mX%2Ft153w%2BZtESVzmpcCx1Bz%2Frmayc0ZYewo5DHEM%2FPJIZfsgq6N7tO1jRERknFHK5s0sFws7F%2BqA0caZGdb8VHmqtYkV4lnQ3HyHBeghXsUIK1JyTFFzQmlQpIG313SDke0LEtNorafLgovds%2FerbZR83SXH1Ss59e%2FRmtEMvxZIT20EzYFg3EphG6ZJpP1V2b9jXBaQBZmQ8faJhPJmWDFC3e9j8154DWtMJMp6s1eW1UgN1ifvfi4NdHv473LhQfXOIfyr%2BNaRw0IfURGdsy%2BWgQc774Yq27U%2BlBt%2FFgRQ%3D%3D; expires=Mon, 03-Sep-2018 03:49:28 GMT; Max-Age=7200; path=/","ci_session=92aVasT7VJsoeJcjBlRnDpaQ4y%2BTO0A1K%2BcJXOZnIR5l8xb82b3XqpbCihREYSoNqbsOn23HJByiIwKZlR%2Bno9nKWraVh8iMOA6lXGMeoNDOWz7kE8j3pxhodrxZxlZ3xFu7V%2B%2FC1BQh2ETllqqr5U9iMciZuD2YZlDiHYstyKVuFnFmZEII1KNA65XOo7f%2B8EaGS9gSMqpYMPQGZBmblOdlj%2FVE2rJUu%2FzlU0YgFu1VmmGVyt3%2B9BnLKlgVT0UfPlOiEEeQf9YfEK3idaRImIdYloI2QltelxxEJa9%2FxRhRboh%2FmLE0jksvGaJkmcqIPNsKwVswGv7bh0orNLi%2BAA%3D%3D; expires=Mon, 03-Sep-2018 03:49:28 GMT; Max-Age=7200; path=/"]);
  res.setHeader("last-modified", "Mon, 03 Sep 2018 01:49:28 GMT");
  res.setHeader("strict-transport-security", "max-age=63072000, max-age=63072000");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+2db2/jRpLGv0qf70USwJbJ5n++yc1lN5tBdm6CzNwMDucF0SSbEs+S6CUpO06Q735PUZJFW9JAQ5oLUCjAgxFFdqvVlPqnqn6q6o+LpFjkyUX4x0WeXoS2fXmxVAt9EV68U5VarJb66na1/KYSv+p7vZzqi8uLql7FOL/YnMfpKiqfzq6W+T+ppwvHs2UcJ0HsKTdBs1mepnqJEwYO1KqeFSUOPr75+a/vf34jflK/r25zOlPWeVXTmfweh6mukjK/q/OCmr5TtyrWYjs=", "base64"));
  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
