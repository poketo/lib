var path = require("path");

/**
 * GET /manga/urami_koi_koi_urami_koi
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: mangakakalot.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:25 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d91b269b98da04a49864613ffd5dc45831535939364; expires=Tue, 03-Sep-19 01:49:24 GMT; path=/; domain=.mangakakalot.com; HttpOnly","ci_session=sn3M%2BoO54u0sQRxj3J7pz5UVzMi8lyiQXaTZ5Y%2BBe0r0V3LsQY2ATG%2F5Owe%2BLakjdWSUp8NrbuKvPUIkWJlfzmmR9kjiS9b7edf8UvwNUQbWtQhcOaWSyDxQ2R%2BuXGY51mwEXSxOR%2Bfc8Dr1JGtYYf%2Fa0mqaxZT9QfTN4AhKyGLSbc17PruTFznehxLRD%2Faq%2FcdjCzum6nZBjU6dGPrveqPm26BtEsq57DpKIlw6315Wk5oF62llFdm2Wd1pWFQ2sy%2BItAqFgXjw5Kqp5mjcXqZsICIFKBSr0G261FQnAqWLtHQ6fH%2FWsgCOjx6Gef7bB62vJPMvy5mvd7XqDLGdtu9f9p4pFPgEB9oOT2JPc21RbSz8fcfgHpphgvGQaGYx4f163af631754c4c814a45ce2e14c557738c7b49; expires=Wed, 02-Sep-2020 02:50:20 GMT; Max-Age=63072000; path=/"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("x-xss-protection", "1; mode=block");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f4694db6d06-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+wa7W7bOPJ/n2JOPTQJLpK/EjtJYxVpmm17bZMiSbe4XSwEWhpJjClSJSk73sM92f24R7pXOFCSZTmOk9RXH+DDBohtDoczw/kkR/r3P/91/KdA+HqSIsQ6Ye6zY/MFjPCobyG3IJUY0tu+JaIjiLVOjxoNEaVOgg2unkM4WIQ2wsFzyxBCErjPjhnlQ5DI+hZhGiUnGi2IJYZTHvaXqwLQt0pSCeERGZIhYUI7vkgKQCOTJKHeUBT/1ciChvvsOEFNgJME+1YkRMTQVlSjPUJJQ+oTTQW3wBdcI9d96/o8fHN54avPbR7/cklvLz7EX761vLe/NAPvLKKnt4MmXl5G4ad30QJ5KQZCqxoxygO83Q0FY2Jcw/ZjIhXqvpXp0D4wGtFUM3QvkQTwxUgPHwTdLT6qsQOfzGbhgjPKEX4SEn6SiMeNYvGcJAEqX9L07t5ihOsxshHCKdWTXSDGnAFEYoSSYwCDCegYgSEJUCoQYT4MSUIZRQXjWMAAiQTKzQSVOTeVI53GlKNC+F0ElPgOvOdAwKd6AuMYJcJEZENCwbCLs4RwBb7AW6r0br7cJ3qKYrjEggUKCEQyCyIEEhHKlc4xL4mGn4xEEyBpikQqI04oBddG4HMcZpzCh4nIqB/TgrpxuOluZusdeK9fPO8cvjScEsKoj7ZvVIEBvCMaw4zlchmBqAJCE8ojCIWEmCpgNEQHXmdGqpnwVBkJREQUGVI4J1plsdg1JKacmBKAt1pigmYL/JaKTAGRIuMBCB2jhBRFytBxHPhrpjQwOsRcdEUmRoIX3zKhX55mkgplFDykjGEwVWMxC5FAtQvjxRgY4mQsZKAsoBqTVIq0Dqt8Zbkb7j7qoru5I5OBXw6f6tNPQLxCSc3GHkDMU4KJsVSjVLvwWFSJkvfT8HL7hxJxQbEjiuNUSF1T4pgGOu4HODKulQ8WVukx1RrlkU9kUFupsiQhcuIxIiP0aEIitO5faJJZbWE9Qy5ZkeeL2pKV0s4S2n8knj8ST5l47neQwpVnrmEKuzpqNHK4atmh8DNlixS5Ej4lzClqdqZQlmvyuh+RIEKtGqkUt5NXZoZQjrKfL38hUdHf0Rv3u83mi8XJUKKK+3tN8/cik6xfni7IiGginWQ4ZH7AR+2cUwH0ioNGZ7/btZecNpybNKo2bfIqSj3Jj0fmEFXPCjgogrZxP/YPCc8lxDPJ7ij/vzlVzZH+P7fskl3/kfD+SHgLJ605DzGx7hnzPSHw7qURDo5IkFBeP561jIe3u81Op3fQ2z9Yui5NPVo/V7S63b12e6/Xbe63Wr3eYbFwdhNTsZDazzRQ3zj0w5evkIwMmkN9UdApQgFMvutbGm9144aMSAG1QEl/OS0dY4KqEYsEGzeqcfMtQzmxW86h03ISyp0bZbnHjYLUD+UkxszxjVMoZOvjMiD+0NbC1iJ1btSrUb+1JkZBQJNIC8E0XTOnUCGRflwycQ7WyMrPlBbJerfjCzGkuB4eShMpic75mN9jItWNuo9XLRL1hKGKEfVjYVjfSLGq+HJ8VTL4YXTngmU95HPwGmjPBcaPJ59/eWVI/Bjyldf46q5FF7MtSVNWdrPq7uk+AwAYEIWZZDcK+rC1jOvWyxzX/OVqmqRYLDgVSZpplFsvn9WjwghUkHeMlJ4R1zFFHf5eEfIFE/IInjebYdhsFgz+YagUi79jC57Zg5dJVur4oZ0UGNMN3V3pkUzHQkIfrIcJlIgNq7ZvOG6U3cuBCCbus+OAjoAGptjaUpgr93EjoKNqa4XwfyZpSoNwYIS+W4FLKfOP7TDjvtn/drALahdosFMpc0Qk3KhdCHOjBE6E+oxhglyr15NrEp2TBLfVzq/N36Z2pCFs1/FeT94H2zTY2QGJOpN8ilcS9CUSjSXuttp5CTfKoQH0gQYzVEdJ36iu0fAF5+hrJyQ+DoQYOhx1A7n35apBmCmlz2/DQcL6rRckTd8HfQv+UiliSi+8UU5KJHJ9LgJ0KFco9WsMhcTtcrM7pddsB8LPjGi7sFXodmsXtqbM7RulguHWzs6cj8b58bq0ks+IUn2rujRA9ctUZWseS4vUZiISBkweCVcL8itb36rfxCz3mCbR0yuQOUiphmHppDyygDB9h+ASLg3iPpv63J0NFNu/s7PCtynP76qhkEl5QQ9lUkwZOOWpOQMGU3RPaSEnFpBMC18kKUONfUuEoQUpIz6aWwTKvnVVxGa+U8dxijxVEMtDvm8FVKWMTI6AC44vy0SGDP077CbmDlyuMRKJ/IoFI8KyvApzLbMJcsst1GG8/7hRIN2LTfyIEss9yUNa1VAbBXfzy2jjXmWaO6pdrFB31MlERPnUgUiR6bmYtvxnjmNuwoaMk+uGIxO5C+TLX7H+XNtuSnuguZ0jWO5H81XY+vuZSIyo0igf4jPFsdzL8tecZ81/kenKRAwoQztBnlnup7PzL8UiTir9jCVJ83k7ldS0NI2eMpYbOwfnH0Z/Fc07yIzOzZiuteU+HpTuu4tPZ0ac4wajK5PJAR6jSr/KixQjGpV+4RONkZCTPmHshdJEY/4rJRGa6lxG6seT67Ora/h0cv72xHLrox8ulxap6T8/UbB3F5VU1c8fLhLH8dNVdX72dSpR9fN/KNFpmdOCu3KdXnz6/PHs+uzNVLo7gJqMjcw8JG1wUo+XByvQ3czMaJD31eNOlcWNFJClAdFol/OfLz5/+XhyOeUfd2qnEDFmdoCJqILJAKYHdnOSqvMrtPhsoU493ixrHR52evYYydDbbzab3gSJ9AQLvBFGhHuBJJHgRddMcJRSyL41O9Ed6Zjm54j+1mNFMW8dNvaae3YpVMqjrbJq3NWc7ZOiDZdr8Ine0XhkE5UjfEUyBIMHNvzNdOYuWAA/G0x4U2C6j6IUzpIb7DHhysdXj4k3xfP2Zx5bQGD/CL7wVGJAfU0GzDQipZ8lShPuo7Lcp+HdVwR+jAv1ensdWxUAqSlhXiQCT6Mfc/otw83wnuXyV/a40kTCpwIF3ooArisUd/ncCq6yXJbKS1q9zoKfGJhbG6zT4oddW5JhdkO1yjwuvJToWKjNMPU9gle6vJzOARfwuZhz7wGuYNV72Fbm7MysWYKg04EjeK/g0wROlKImijWccC5MP/uV5T4Nb40+0Ozs20PCIzHMvBs6HOKG1Il5mSu9fyjA8NcC7M6PV7D3PJ+ZqZuLpm7WzNlcm8nazWa7bStCY9PkyZ2QkYBuiNkW5Z4l5mKqiM5iyl2ErZKIF3jOEnBzMf82j+BrjPlzvgmYfgaYe7X78Pz6IvSw09mzJ4JHXow88n6Pqfd7tiHWXhC70vbfBI/gHfIIfokp/JJxy10ArWDqBYaVpbvtBUt320dwhb5EDVfmdav6SeBxnLVZfK/XtjVhqDwReubywJVHeGCOEBtSmpdJX1ng2iCYx9JvcoT82fhbg+Aum1nBF5ZJMQv+gwNn8ZyeQ4/gI5KReeRs3hwwrwzARyGDLWXe7lCmlbX9mUgN7Z1aYvi+hesrEK1mt2UPMkmGw8yLyHAoMo9TT6tMiwTNk4GYJkRr4inkCulmONV3bKiy6etiDbzN1wCncD1dA1flGrgq1rjfgbyCN36H+LNDxoJzdo7gZKAEyzTCNSapLl6Xdh+eX6ertbv2mGiiYqqJH1NvTPJ3dcbC7EoSTjbEvR7ZxKzvUMODMTGvfMFYGAcp8NxHEFbpOTws2iyftRaTWauWn1rrK1n7+7YWifBjwo2EgnPCxVBsSLm6R/JZqRKJsM2sseVFOfsny70fvkqZuod7ZdKDvUWbGphbG6wzujuH9sDcfrjwOKIiG3LunJd5Vg7MTZALOEe0Ddy9A1glrc9xejhzf84kwkcxwrl8XUHXeIXY67bskWA+4dT3SLQhzby6xJU+fy6BcGLewK+PVrBencPsprAYct1axHXXF3C9bqdrD8hwU05kZFg7apmBaz5XiSIynJWxdq9bUR0J5nRa4MdOu9eFIzjxpVDFa7dfhWSB5T6GscaoOjxs2bFgEy/vzGshN8NscyLPHkEKNoGTKdSdG65g0Tkms6cih4uPRQ5rjz4O12itbrNtK8qQay9/C2pD+mU1iWedshwIpznQrY9W6Y7VOMzqV2+xgPXg17PzN7/VilcJWV8+7PVsiSTwApGlwvMJj75R0+Ep3mfZjMcUS+WvNPzGzMLpdNZy7wBWeUqxlOsszXYWDykG5tYG6wvH9sG+HYgElaa+x4k3JFzcbMh9YVHumimLKeAEPhRT7iJsBYMu8pxd+w4Xs6qBubXB2gzZ7bTsSJo3RVF6m3N0mRO50t7bEgrFYWZuuILN5pjMUuvewdzxpt2G6qnR3gEc5Y1DVbScf6aoOUngK5GwnU4bjv8BAAD//w==", "base64"));
  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("B5u4ucRxx15n77jtpKG7eapcHphyz9go9tdqcY5rDK7cPdY9r46LM98bd/Zuv7iDnagzKFeerfIqjzZOQCC4G32Ee/eeuzt5ld2SV9ntV+E2GDjvD247eZXdXgm3XuVpQM97f3Dbybfrdku4dSvnbeS+P7jtpK255UrPnSrchgN3QzPpuLCL7P/E0d1J63JLWpfrVeL2Ps3bTlrXZlW1zXkbvT+47aRBuU651G21nOy8N7jtpNiU9JpKtabjvD8bwE5azbBUD65y1y6FlXzXiO2kkJT0kUHlsUyn+94gtpM2UlJG+pWs2OteJff37oHYSRUpaSK9SjdC9/0RHjvpISU1pFtpE3V7V83Y3rX+3Q6CS4dgVWEBruNchdj+nSM7+QJKZn0VYv3u8P3Zo3faoks7dEV8Yac53MCsmLK92+c7KR/gffnJU8FUJHWp0NjK5aqgw9F6GMYW9/abMvF9OYOuhhh13djI9bJ31ZX5XkWTt+ske2GGADaP/sheEdkskUoruGgvYcC78iHJAfK/0LO3Dv/1+3b+AFIBMQkD+tNAA8ye7Xj5g4CFNIs13jRJjHAb8hHzEQAadqA86Lojr3guwJzGLQ1AITXDtCx8YXLDX2BC4vIFeebhNV+imC6SFQ/MO2IANqSxYqtdUd9xz2MDwGpfalJVz4EHQcxqKqrScZy1oipe7+2rqnQc59LrvVVZFQPYKlDXq6tyyWYtEXGWVfVbo3Gcl0d5ArHjX8kEsnkJpuKa2jsrjdQgf/OK17fyukjvZ0cy0iLX7wNmqw5tIeYNsK2tg1YJNdvVqhb430VbKNIi1+/LVAsWN+puVAbbqY9B3raDT5kRruylUwvob9eOpgT39q4wtcBeQ0+V8kTs3rukFizfpyYfJfJc3VajFirsqxdFmQHc+jj33bVXKAE87FZAfKV6oemUaDptgd5VpWHAPathPPzsy2efndr3LutHaTpVOAxyKW31qLz1s6bTZfE0Po2Mkl5rx+CTODbqT+P45PHjlc68q2C9JRDeFhDIXKbnoFpzn8bxggQs4T6aDSEQgItpk1xwGTPhsyZsTVKZc/MQikQl1GcBmUlYSW3MvFwWVqoHl87VuNyTNonC5p6bkCquiMq40b6kiBdYtIAGWaxVm5zBk8rkMXJF8q+QGV0QLvw4CxhUZImlmLKAKJ8JI4Qh/V0oVlAGKHIoUwLVYiPuE8UuMxoXgAC9RBZwvQAKwbfrI1D3agJ9DhGqfkRT6sPqs9mbaAxhjQQiIcBPpzwhQCPA2tAQKv40oaxDSqB8DZkwpKuhL/5JBaHBBRMaGmGYyt7kKQRmzrliTcLhzD1LiJbmLQlLlRQ0JknKXmYBB52hmAPFkEr2bfVRqr9tWQRQPwsKPpv1YTkJhQJOpww1E1C+Q0IfaKCXopqnsIqQsFIwG41FNclUhovLzzmUkogmyYKkDDck2JZtYBsYrPhdX4ow5r6GbOaieFg9hBhcTQgUT4rQicw0CaUMmsSX8hzkg4K6GcqkTc+oWOBtwJ3rDz74gHwewlQfQGKGuRODIdsmZzDJ9+w7igXHFa7Lhcyy7IMPAGUcUB/Oo6txfkAFmVDFAjP3XKiEp6YijAxD7oNVRAUEIcs05/UH0lqyX6NrRDWJTPmUA4vDSxS5/5R8+fQMnBsxyUTA0lWJg/XiX3KhIl4fzhWF4tY3ghkD20hLMsFUKhAIgjAj4GkM/JpIAStaZX5EKIhOpTn6FoiigWAK1wJIR9gSGss6dDWh5F6N0ldSKT6JbR0fLhjILYxijhisQyOWpWiZn03CfFCx8sWashAK/2hJQioUSy9ASiWZyXqXhGoNchQkKkthVZMpljqUIY5vN44/g9fViPq2bV0sdMRz8c3FhYwvgCmh2oGQINBnHIo7atkkMzrlfpMEKaMzYII4yDd4ni4ImiztxvEDKjRVNQohd8vO/pCnsQIIlQKksgQ4b5otVBP/u3EHhrfb5CHc01kqTN0ULc2dpvln7U62gEc+h2UpzkEQkSkzSQegEGUpbEoPGa7cCf5TIym629YplKlBnQUm1SxS2HJjVtraYf6MTGardxS5nfO3ZWDkAsRzdeSdNjkhz9gFg2IYj2gKhfyg7JXNGZgiDaBYEyOpGRW0G8c4sEbK9K6mzCNj9mpJAml2JRkHqMgIn6M6yGfIyo84qDywU9cI6FblIqFcQPShFawoMxhEpsIitMuPTiKZpqBcHhFKVJQFgUlvNXVKsMwvDgyYZsoYs0emRpmpbrWycSmwjlEihCnoMPB1eFhF0oeNFsgi4ZU1kmSLmvGYa5YiVzbIc6gk2miTMyzko8hczpgg7rDVcdrkgeFn9tOMX1BsmaMlUYwLJtrka4HlwVQks5eGpVNTlRQ4FwpdkZRRgJD7iDwUlyI8gGs/Y0HbtF8AbVgzs6Plj7FLOIzh2q4rKw2+kEUX0VoU+e5WtSzKKLmt+CyJeQiVWWzRuTF5/cff/+ev/nBEdEoDbvftlZv/+PsjknCxgFOGJ3/+rYiyP//2iHyxyHSC5a1mlIo+mVPq3cHlnZezgwJUvgJ7KMjA7OOCPKFcYNk8GEOb5BGYDD+SYDTC1TPK5xS0AANvjbTqbKfVnJLbj6iYZvGY/Ne//PKv//Sro+IA4lzIuYBt4zmbaClF05g2KOKAKcmPZMqogCU3QyXV0gEQTFIuNPFpCg8qchtOFqUgmaJQqQ+Ky1krUqHGiAWV89F32uRpphUPMKkFP2JC0/FDm1rIqcx0lANjYGhCZe4IigWY+nUGMC6CTOl0QdiMpVNj3n6JpQTwYUB1zuLYTsu8Tu1si5Z9Yogs8Bgrw+wo9CxYxcWeXhDoqgEAAena5ESADk4UbDj5TRkC4hOq0QhjcdgKWMhWlFTKz3kgm+QcKtazJnmZwS/QUykj53MpCN5lAv4JmfB5zsFKGh0Y/wqBiEi2JWw1em2ca7g6VDZ5yXwNQgn2/XnE/Qi9FxNGtCyqKyLfmlKKhfUBpSSR9dzBdkeItVo3nB5NMonBsDNlM1Og94bbA5wiSqcgFmJYf9C3EghYr2XvuW80dJbqE4BfMtDh4NYenMPMQ2nIRWK8PjHsSCSVEwk7yAwcsgI1iifMj2pcRp73RgPdTLxdJ7lCp1NGNUQ6oMsqjtE6A3S5eJmBEomgB/VqQt6WbezrXBUVJBOwyVIOpVfZBcLsQ7nJZpHTBr1PYPPRcMbKlQYFFtz4xkTj4JPJoEApBYGcgfnOwXnyZKE0S2s0XLwtOikkdp5GUjfQR2acBUa+o2EWMKjArHKVHq/BjqsimepmmSvh1BJZMsTCkqjz23NC1FsW+FwCibu+xtWOmjqYMXAjtv4W9H2Sn2bcPwddyLqnIhCRBA6NjYYDJr+wamgg0WCc524B0JAy/zx3HpoQCZP7bhyJc8p1/qmiUGV+pGnekLKYUWMvAIEgIqjG6em/mf9ABVTLAoBJxGOpZBItcsTg8FOGZMaBLFyQGUQw+JilHjBNOWqLdCJkOgOnplr4kYzlFNy9X+U/al5mg63eAPS+FfLBxL+Q58wUxQ1YCN4RHEJV4SWZUbPzzUGJLm0NilnfLnCPQBZqWjdwycULShUUcuWC5jYOrk38ClftW41yz4CaiDJ8o7kIi/IlKg46X2BLpzjwhWELsJ9wI0D1w4+kBP3pFP/A8sc1IrFFiToFQYFLTYGN6zMScjyAadpKx8b5aB1ARM+50ujmx4AQZFHjzcbpzN+Rs0kSMQHGF7XbC0gS2NtTmi6I2diZqcJgqTaTAUsFCejCvEvz0HjQ4wCpxUlYo8HU2aIwnaKJiO5NRRrAoWIKDtt2w7htrdwDpy6KRJUwH4BH8aCtJWqewrMjdJYUpaqtMoV0cIewBLyeEeTmswiEWhqYxn+T3zVzhAW8Y3g2Exz8KXB0r3QWQKSi3QSlYrnghYfQG4DEJWfFAd6Se8HlqUo8DHewYrCpVQJoRFLizCAgNc7MdfQxDR6lIDerZjSFsubzlGs4aAEWN74s1Sa52M79mlC7XaKSk9v7qLAbtXPpFAvYBYtlAgoR4Ixeghpx3qK0PcXDI7UQUixmcHyE87PIUqzRjkJWoAYfmUJwMF0KZZARoaDHWc2+TRoE3KMHyiS+NsFQAZ9Iwuh5gSahda67zruYXTu3ZyWxla3Oc3EinRsWuSFi0ayXhbs7TyeVN5vOu3KRz+afflM1nyA0ap3Q3q5mO2I5hQZOJGVJyhQKrYAuWlq2YDvQKYfmLbA1ofSRgh2ig7pYnrfBIWJm349oHDMBNeDRFIATfahOY6IYjZiD81OGWgn49HALNjI8ZfZstsVDVF2pre4P7t8W7PO5CLVw4g08HsJ6NyhQzSYw4+ARVcSqM0D9GI+qw5q3/M4WnfX+UlddNxvQTgiwZ0OSypAKPKGUIXhD+AVrEugjy33wesHig1dAv5w0UMaLWjbeAdlZVqNe3hnc2DekoNtQySt0lyo2oXHchGPbc6bN3+DZZgtYP77P0iaZyjg0Nk1KwcFjDCktzWcoCdkckMZ314j28M3mCB5HxorQGf1Z4aEo2ccJVLrEc1a7PIx6FrDQnnXSOS6yJFoo7oOVv965qibcRtfwWFmQTRcr29BgCo4KEkvrnphxBa62TIBkP4OOSnVGP3S3qI3WJbx0Hv/3r//9r//wb3eMOW8dtcbhEjDIJJiwVT/tnE2sV9bECoAnulivSTaJOTaDkNh0sw3B5fjBGhmwu0UXw9gM3LCzdRWLC43+a7PqQIxHPCnZigzE4zdU1nkg4tUBOR4vAexZWobdtFlaCx0Eq6AFqLx75LYHCj5+TGyk4GaIYr2xg0u4fDlLYqZZsLm07Y0cxuPiyj7gkqZ95abrDS8XMBVdLuuHKEhlsrFtQ1+3IAcGfu0DkqqVIhPyDFx/FpT89zsDZ72V4lZovsTBOSzm1zuDBNSDG0LyGB/dkAdbO8SUOrVV/RNKqVm6loyI11pW52pgd+nn0aLcswTn6o1R2ralIQBsOzhDycz1NofkU9PIODk+w0Zk1ARrwikjVaCZg79Yme+mBY/Y3cnoTjwsnMoUAp2M6wdcfyZBaOX8HGkEKomAPmom2saEEkKYo/WJZ0q3sQKidSJNbKnEHKZ5tNgKV35cO5OCLcAPCdYWNP2Dp9rkecQNDCk7UGAQoAqJgQLU12avgBZrxhkICYmgkaALM6IiQOPGPIvnuQJ2erEoYqvMuavSBnpw0MArjMlHgwA8ouhuhxZrpxKRAaPkpbRGSMCn0IETz+JQN11H71NyIox7bsKnliigb1xJhyiDV82gpDz6rKlmKZxW5jGs9ILyGMKh2yZtB0Od0Mak5gQZ59CYDua7QBNzzXS6UxEzbhc4WbCRZLZdnoKI8IIyYKZdVHxH5CArrtkaMoaI+FprLgZSHGiCDfKQhpYFzZEEMAxwi2IxQ88nUhFZFKYrP7dAfjAcguwIH+TGBbgkoOWwCUMIJxfYjc6PJNh8Njo1Xz9/+lfPcfsbC6yJ1iZG2KCKy9ILDCyRCegODKNnzdYIgegpY22Sv/FeBtE+2lS35YqcsqQFJYGh67IzGvegai05edLOx5v4WiQw+WnGlKGVWV2FpYSh7hcs1VzhkXaCBy/mRNeHuGSQEh9Pllkgh34gWv6UH8aHbEZ53IIDN0PYQvV48cIPX+DdFy/y9OYQf3/SGA4YZX02Yg7rM9/+f8KGYccfMAfvMTahI9ZlQ0Ybxz/B5374odt3juynWGDTwyfHq23XCwFq84Htl6laCP+TBqYN22zgAgszUh32/F4QDLzhoR/LLAhjmrIWxkz5Fs2A+TJg7RkXq2nB7zz3uBVKOKlvv1SfXnzitt3St24VmCFKy5er8eHhfD5vT6WcxkzT6YwKOmUpfmWq6fTwpfqUB598fdJyPW80Gjp9t7Xy5o/zPwiZcxHIOfbUfUwXDLLHNy79/OfkJ38Ded1hJsyigq/cvvO3xZB2kqnoNk2nGWbS3zn6u1vEDDp4qQ6aRLA5uU+hu+ydo1vFLYhp59ODJjlYBfXgzkq+9+FEBgv4F7KXj/8XAAD//w==", "base64"));
  res.write(new Buffer("AwDdnNm2NscAAA==", "base64"));
  res.end();

  return __filename;
};
