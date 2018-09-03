var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/1
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:17 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d0fcd373ac5e7cc9f79c8cfc5eb9c7d931535939356; expires=Tue, 03-Sep-19 01:49:16 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:17 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f12d9f692e2-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf/Ss2bKeWpqYoyZYfsaWO82iTuW2aHruZ29PpaCByKSICARYAJeuc6X+/s3yJejpKkx7de6vMxCQI7BNY7C6WvHny4sfn97+8fQmRjcXg6Ib+gGBy3HdQOtSALBgcAQDcxGgZ+BHTBm3fSW3oXjrFI8utwMEt3GvGBagQngmlAuj0wIUfmBwzuLMaWXzj5T1rACWLse9MOc4Spa0DvpIWpe07Mx7YqB/glPvoZjcnwCW3nAnX+Exgv9NqO+ugAjS+5onlStag/QNZAKFGhDijR0nBJYLgE4Q3TKdWncAzgcyPTuBHifCWo48n8CqVFjU8lBdMBgRgDrHS2CqxCy4nEGkM+05kbWKeel7MHvxAtkZKWWM1S+jGV7EXKmldNkOjYvTOWhettucbs9Tcirls+cY4oFH0HWPnAk2EaB3g0uJYczvvOyZip5dn7mwa/nfye/LPf7776bv/Or+/jXpv34nvfgx/evPqTr3oPoxefv3T5O3D89tvxZuXOFUvX53eibbho3f+jz+9k28c8LUyRmk+5rLvMKnkPFapcQZHNd4yQrhPEs3Z9EI2pfsW95UDdp5g3+ExG6P34Ob9vMHqeBMpbf3Uwt6AMkjlry5tjxmD1mQizPRqsmlG0vvm6ur0snPVbZ9dddYlmROXU/jEdeHV/Q/f98BEPD6BUGl4/fLcvQSTJjQpaULnHVBgjNIacN1BNfhXHoKw8PolXP1WtOYzEIz2FzS+Nx6trp6J+LT13jiDGy/vVkL6FWXAw98I9BKUXCgWH6z3nk1Z3lpwQL8Zl4Gatfw4uY8wRujDv5cENmL+ZKxVKoOncPxFeEr/jk+WuiSax0zP6fnp5cWV729+fo8PNoMRhisdDPpKBgWIXq+37XEJwV9DQfx9z+WEnl5cXKw8DfiUB6jLodWzP3JJVZJcnil1NZQL07Qkt1olbJ6tRxYY97T13nwz7Z93Os42Ya/oysvN4tHNSAVz+hs=", "base64"));
  res.write(new Buffer("8CnwoO9oZAFqV7JpaRvoiS+YMX1HsumIacj/uAGGLBW2vM1H1tS6PtKN6n1uRqm1ShYU5zfOygCrxmOB4CshWGIwcCBglhXNfadsL5uZHpNp/yI2bg7AAaY5c/EhYTLAoO+ETBisE2kSJkukRrtKirkzuM/RSjblY0aG+MajfluG0TJ3Cdng83W78XIBFXdsRU4jzWRQmSQaygZHN17Ap6Vyi/6lxEqtLSRI2l/IrcCTihqicsxichTmbHDDFqhfqRgJ/Y0n+FKvElKgVRKomazBKHjKYXzhrPYs9L2i/AWcbG/Mt+mbUcUp05hN/FEujSVcC74qHDHKdIWkdfYyG+0xa5k/GSo5tNwy6QxuswZQEu6pYZ39XdBGqA3qiTN4ll/sNzrQbKzkcMSEGJo0odX1ImuCZ0wIuKOm/SBGjE/maeoMXuUXT57sO/49j3Eo1ZAniSIwdA9SweskUfvBiufDCLUaMp8FGHPmDH6YwyvUCm6Llv3gKYnDhDwjZ1A5SXtDSFLpR8OYFJ8BoVuafvsBkjhFLWjZDt5qFXODAbwp2/YDZSI1Scc44SR0o9KYOYO7so0Ef0dt+8G0EQ4NTlEOA2SBmA8Nl8YZ3EcId9QML7JmuOPS7AlZTeZqOI5UKjSSrZ3MFXxHt0/1bmVUazbfTJ0PR+oMvk2FgO+5sZsx3HipqFmrVdtVg1d45B5LEsH9bHcgC+TrlFvyrTbavg3jfSWUdgbP6Q+8ZWNcEeOCoq1WuNp6+TiyW01y4QRm8qpEGDIImTuyPgmRD+CFkszuttsstZE7TtHYFUMcq4CJ1S1YqDGXbv5oQczCJXl67Qy+pz6fEKfGMTcW9SNo/1F0+6BdCjIS6D+UlvSNwfrGVYyBtQ2r2tG27FxLO/8wNagpBqy2/s+9nRm0lsuxcQZ3xdUHLuUlgZa4hRqr1GZqVenHrbMlvU9R85BvkvcOIqSyPCzWZamGDcysLgQUwlWwNJjaCv8x4kGAsu9YnWK+YNYhYryRBF+lMtMbxquSYJsEkQsod92yyM5rSTat/LRF4JY7d5t8vJhx6ZJjT/mPWrtJR5v9+vyBO9MsSba68GS3tBJmVRu1LiMrXQrUEqCrIpTwI5bYJajrC2dkZTakDCk+0PGrltc67DW3Oleh+2CguDKxs5bwKZddp/covGo9LrvyG7X7Eet039/yutYeG1ribKjC4Yg4807PvF734tLrrBidSi7O4PQMXLgdMRlUAc9S1yk3fCSw6Fv22GowPuXvcfZOvV6319vJ3im48BoCJY8tSMQA5ip9lM/TA+Oz6/W63c5OPrvgwjvFfQQuwUYINuL+BO2jvHYPjNeO1+tcdHfy2qEpqxV5t48w1zkw5tper9Pbrcg2TVgZYIIyQEmRyiM8tg+Lx+6V1+t0di7K7hUpMKTU9J0fKSXgNlACjU/8fvMYw92rA2P40uu1z3ca2e4lMQyGS8owGYvJo0xeHhiTF16v3WvvZPICXHihlH6Ut4sD4+3c67W7O01O9xxceIbSjx5l7vzAmOt5vXb7fCdzdOD1XHOKdAS81WhMqh+1O93eZ2H0wyN+2JaoWxHBo2kAWAtRYOFrLzU95vYmbIwf5PMWRxOfyOelRAJ0NsrngL3XzzblOz3v7Dxfz99ybWwun0an+dcsyb3p7DqDjMLugdJ3WtB3eqD0nRX0nR0ofb2Cvt6B0nde0Hd+oPRdFPRdHCh9lwV9lwdK31VB39WB0tdpFwR22odKYaeksHOoFJabSOdQd5FOuY10DnUf6ZQbSedQd5JOuZV0DnUv6ZSbSecv3k3+/v39+9Ozt3vuDL5nVQ==", "base64"));
  res.write(new Buffer("xNA93zNkeDSKXL1dRFcUOuodUVUtLk40TnlW7bibqTPvrHfZ9rpnzuArwbS+pth+uv+yrKGW+GCdD45q3uCDha80od6NtXbsvXzCBStRd2wYxIa5F93L4VW7rF9iZfzNbEjxbSVjOkvbBMOtHY9XBL1iFoEFBkapBWO5EDBj0oJVEKFIIDXfwDP0VYzAYONJe3VJ3D45WlF4ViJZJ0SrmRuKlAdAys9O4jac023JKUD9UPQRPdzweJyLihIkeZYCijpPj8fj1lIVqoo9P5BFMqVzdpWDaXdaiRxTYetSnmAzXRs0dtpuD8/b6yozPMAlna0slY1nnVtmQagUFQKMarPgaFtV6yjlIlipaH2sdvXLhvNFTYTNlpLYcIRigXMCYSp9OvxtNItK1inToMLQoIU+fNk4rg09brbyJ41mS2Bo4ev1DlnxeKMJX0OnfX30R7NFZd6NNSw8bNiIG1JbItBiE77MGpotoqvRpKHXR0dfNvKC22ZLo+H/wsZGcmebKC0Iuf70TK3ibZXHzatYV54xa3XjOCuMPj45jpmmqhNC+dQ9/rox87rNr4+Th+OSd9JbqzgHb7YSLiUGjZzpERUYm6dw1j4Bz4NZhJLW+yhf5sZyfzLPOhpfKyG4HD+FvGuiDCf5QZBqLsdFh6xvrEZc4FPIyk6pr6E6p6AqzM6f57TVioCXZjjVskDIAnTAshGXAT70HZdqwlWWGeRMqHE+85eKbtatHbW7Zf9itPJTqlracuifDylKlnac/Of9otUS4KrrrlJfX6iqgjfgJuYVwKL6QrARVb8/z/oVWegNZRlfWR6jua5S0fWC2SViorNlsrNXOrKyFXo/QeWVpPn7HsD8rIDjxovO9soJ55CLIow1CpKq2FeGaotFf5GdU0dsikD85nTAHO032ypgFjPAKreshXIGzzXSdqZkVt4FUs1OgNtjk79NQi+E/J5yf/JkQxY4WSlIz1pDpeNayQ+XLrU4INWUCR4wi1QCU15v269qsqLheQJ9p9NDs4Debeg7GDMunMFL+nPjZQ92DOQySUtDno9cQlwYk7r4il6JYD5GSgSo+84vKtVQChUDyPoACwI6I6H3M35PObV7OyipZ+ALTForvYbaLaE5gwxtjoubCssJJAKZQQjJNVHEXsQNhBxF0NqW1N8yaz+JRhJmzExpqmUtrvbTSzX+MdUsOi5p523V/KkUUSKq6aJE8ik18agqts2TrCErx81mh1fSS0UtgDKfpIFCQ1YkZtaPgMm5jWiD4hLy2ewrHZgT8CP0JzRQQ4CWcWFaO8lbsuYmHcXcOltKueo0j6wsrezCOu/2ZncYuFDpsbLO4DXkVxDPIakm36bzK48m1UYrvtWM44Olkkyx8yRvrNRYoCsYFYLnVK40bapCXS1BzIcU5bjfZTeb2WCLcT6OlJrshaYcVCD6trh9BJWdcUv+9D6YijEFovv8br12dWtUvOz1f6xLtFoT/LdXtJ9XdFs4HnnRtC7ehvrLvaEf2IQsV80TUnLJUSOjS+ka8meQmXkLsq2z7C3Qmsw0+iomzdJwjZnpNvAVi5NrkDgzJxuRE8xsLJPkwM9yU1n68KM5mHRE62BEJDZY4GaeVY26J80W3AoKc+erHt1Ob66avFa5meFzBsV2IzIzmh3UA5fGIgtaH+rALd71K6DvsHL0+0WlwDQCG2X7m4LsBVZGO52mhIW2czDK50xAjAFnldCtAkZi3eRRt+BH6SNJciPOmE0wq10sup9UCkgNFvLfgrIQDUmFSSvmZRVkmNpUYwteh1uxsiUdbSL7pARPcyKTA4HeSEqoVVxQWhTXbw==", "base64"));
  res.write(new Buffer("0tDmbXbJya709Ff72Yv3EX4urvbz6ihtssWji9mDQDm2Ud/pXuaTvcK27Nq9QJP5c+VjaCTpSHBfzIFeumcjgc2PcPsWk3/hWpUo3FTy38l43kfMLhBzU00QyyYoW/A2X4xUuGhoFsSYO1gBD0PUKO1OF3A/mhZ+6M81gv60H7ofEWNbmwwQp8bCCIGRfSXje5p9XoH5FrUBoeT4E6IWS6h9JqXKkNOHDMBGTEL38jOiZyKJmEzjZRroMwzz7CMNjGxC0Qc19+ukNJj7r8xgtN2r5n8kPvt8EfOmWPkd2aSPipArV4DS7O5IKH9Cb2lMawBrkx4ac5UeC0HTwNCmziB/Zyh/9yazzyTv5E9MgDwgXzIIFR2lNWAm2wAsBjDjNgK2MADVdvenZ+JqZmCrVP4/Jgc+fVpgkwo+d05gPyIyW1zhX7PF+xnDz637oa9kWCP3uZIh13ERTnym2ZAj3TwloMHGjMvmp54aMTdZtiXPzZTNZiUtUyVlPj5HtHcSpiI7y8MUWeHbMr+9NS7cnjX5bDF7ntD5O2L/cxE7pfemqOf/gWg9D7F2hFHZwTpt3lMs0ncWZR4slUumsqLZqsmf5XvdCIWabQ3UZ0gegcEiZienPIsFdZodchoKEQvRALetjzn1KObn/51jj4Khv+Lco0S1MJ115J/95OMT2dKC5sySPsMxl7XVdoCW1KS+j8b8bVH/11rU72i7fkKG1S5CkMyDQLM9K3oC+JCgbwubhzyzxzEaQ0VtWYIqNUV+bCNaKvKCEGcQc5laNHl8E6baRmQ+a2Z1iyH9mMlOLbVPki19TsFELFCzqqZnc6eRethS9VN+RI0l3LTyE5esyum9oaanvuCUtNlYCpTTVXyrLhzdmrn0X0tOxS9rBTT0+/ZZi7722Fj+lh1LktdBfvkUjjuXF+dnvYur095Fu3fWO1v5aJyv1IRj0Zmm8vLjh3AUC9j6eIraUBSco5p2W5e1z84V1TR/5H8WJUDBCZgT4EFzQTZV5bw3JxC+N9CHoDVG+7L4jOCz+T0bv2ExNkzz1/Zv19UYHkKj3vPZ/HXQ4EGzCf/WaFMtr/+o+hZg/cwhLfo3TPMa3psWD6APPLiudW4Z7UMfKlX6Skr0bas82GpJtB7K4c93ngkmpMvF6PC9aSWM4vI3KsAWlwa1fYah0tgoWCwF0yjt3wkc5xPg+ASOqyO398YEk+Nm8/povWZstb5sijJQmr7RV/+k4+DxgSxJPmDUrs8rEgQKgjgV9nE5TLWAPhx7x9erj/MavB0dWMLLp7VVtFYvuD6Qm2Fe5kQrheqgFj1ypPk6Od5duErS31nbSDVeRYVYqbpmhmBezW5YWqBUSbby0uVxs2op683+WFLxogbRy7+ceOPlH579HwAAAP//AwAl4GzZiVYAAA==", "base64"));
  res.end();

  return __filename;
};
