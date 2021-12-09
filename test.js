            function findeven() {
              let arr = [];
              
              for (let i = 0; i <= 50; i++) {
                  if ((i%2) === 0) {
                    arr.push(i)
                  } else if ((i%2) !== 0) {
                    continue
                  }
              }
              
              return arr;
            }

            findeven()
