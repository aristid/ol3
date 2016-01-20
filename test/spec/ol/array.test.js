goog.provide('ol.test.array');

describe('ol.array', function() {

  describe('binarySearch', function() {

    var insertionPoint = function(position) {
      return -(position + 1);
    };

    describe('default comparison on array of String(s)', function() {
      var a = [
        '1000', '9', 'AB', 'ABC', 'ABCABC', 'ABD', 'ABDA', 'B', 'B', 'B',
        'C', 'CA', 'CC', 'ZZZ', 'ab', 'abc', 'abcabc', 'abd', 'abda', 'b',
        'c', 'ca', 'cc', 'zzz'
      ];

      it('should find \'1000\' at index 0', function() {
        expect(ol.array.binarySearch(a, '1000')).to.be(0);
      });
      it('should find \'zzz\' at index ' + (a.length - 1), function() {
        expect(ol.array.binarySearch(a, 'zzz')).to.be(a.length - 1);
      });
      it('should find \'C\' at index 10', function() {
        expect(ol.array.binarySearch(a, 'C')).to.be(10);
      });
      it('should find \'B\' at index 7 || 8 || 9', function() {
        var pos = ol.array.binarySearch(a, 'B');
        expect(pos == 7 || pos == 8 || pos == 9).to.be.ok();
      });
      it('should not find \'100\'', function() {
        var pos = ol.array.binarySearch(a, '100');
        expect(pos < 0).to.be.ok();
      });
      it('should have an insertion point of 0 for \'100\'', function() {
        var pos = ol.array.binarySearch(a, '100');
        expect(insertionPoint(pos)).to.be(0);
      });
      it('should not find \'zzz0\'', function() {
        var pos = ol.array.binarySearch(a, 'zzz0');
        expect(pos < 0).to.be.ok();
      });
      it('should have an insertion point of ' + (a.length) + ' for \'zzz0\'',
        function() {
          var pos = ol.array.binarySearch(a, 'zzz0');
          expect(insertionPoint(pos)).to.be(a.length);
        }
      );
      it('should not find \'BA\'', function() {
        var pos = ol.array.binarySearch(a, 'zzz0');
        expect(pos < 0).to.be.ok();
      });
      it('should have an insertion point of 10 for \'BA\'',
        function() {
          var pos = ol.array.binarySearch(a, 'BA');
          expect(insertionPoint(pos)).to.be(10);
        }
      );
    });

    describe('0 length array with default comparison', function() {
      var b = [];
      it('should not find \'a\'', function() {
        expect(ol.array.binarySearch(b, 'a') < 0).to.be.ok();
      });
      it('should have an insertion point of 0 for \'a\'',
        function() {
          var pos = ol.array.binarySearch(b, 'a');
          expect(insertionPoint(pos)).to.be(0);
        }
      );
    });

    describe('single element array with default lexiographical comparison',
      function() {
        var c = ['only item'];
        it('should find \'only item\' at index 0', function() {
          expect(ol.array.binarySearch(c, 'only item')).to.be(0);
        });
        it('should not find \'a\'', function() {
          expect(ol.array.binarySearch(c, 'a') < 0).to.be.ok();
        });
        it('should have an insertion point of 0 for \'a\'',
          function() {
            var pos = ol.array.binarySearch(c, 'a');
            expect(insertionPoint(pos)).to.be(0);
          }
        );
        it('should not find \'z\'', function() {
          expect(ol.array.binarySearch(c, 'z') < 0).to.be.ok();
        });
        it('should have an insertion point of 1 for \'z\'',
          function() {
            var pos = ol.array.binarySearch(c, 'z');
            expect(insertionPoint(pos)).to.be(1);
          }
        );
      }
    );

  });


  describe('binaryFindNearest', function() {
    it('returns expected value', function() {
      var arr = [1000, 500, 100];

      expect(ol.array.binaryFindNearest(arr, 10000)).to.eql(0);
      expect(ol.array.binaryFindNearest(arr, 1000)).to.eql(0);
      expect(ol.array.binaryFindNearest(arr, 900)).to.eql(0);

      expect(ol.array.binaryFindNearest(arr, 750)).to.eql(1);

      expect(ol.array.binaryFindNearest(arr, 550)).to.eql(1);
      expect(ol.array.binaryFindNearest(arr, 500)).to.eql(1);
      expect(ol.array.binaryFindNearest(arr, 450)).to.eql(1);

      expect(ol.array.binaryFindNearest(arr, 300)).to.eql(2);

      expect(ol.array.binaryFindNearest(arr, 200)).to.eql(2);
      expect(ol.array.binaryFindNearest(arr, 100)).to.eql(2);
      expect(ol.array.binaryFindNearest(arr, 50)).to.eql(2);
    });
  });

  describe('extend', function() {
    // TODO
  });

  describe('equals', function() {
    // TODO
  });

  describe('find', function() {
    // TODO
  });

  describe('findIndex', function() {
    // TODO
  });

  describe('flatten', function() {
    // TODO
  });

  describe('isSorted', function() {
    // TODO
  });

  describe('linearFindNearest', function() {
    it('returns expected value', function() {
      var arr = [1000, 500, 100];

      expect(ol.array.linearFindNearest(arr, 10000, 0)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 10000, 1)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 10000, -1)).to.eql(0);

      expect(ol.array.linearFindNearest(arr, 1000, 0)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 1000, 1)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 1000, -1)).to.eql(0);

      expect(ol.array.linearFindNearest(arr, 900, 0)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 900, 1)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 900, -1)).to.eql(1);

      expect(ol.array.linearFindNearest(arr, 750, 0)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 750, 1)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 750, -1)).to.eql(1);

      expect(ol.array.linearFindNearest(arr, 550, 0)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 550, 1)).to.eql(0);
      expect(ol.array.linearFindNearest(arr, 550, -1)).to.eql(1);

      expect(ol.array.linearFindNearest(arr, 500, 0)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 500, 1)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 500, -1)).to.eql(1);

      expect(ol.array.linearFindNearest(arr, 450, 0)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 450, 1)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 450, -1)).to.eql(2);

      expect(ol.array.linearFindNearest(arr, 300, 0)).to.eql(2);
      expect(ol.array.linearFindNearest(arr, 300, 1)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 300, -1)).to.eql(2);

      expect(ol.array.linearFindNearest(arr, 200, 0)).to.eql(2);
      expect(ol.array.linearFindNearest(arr, 200, 1)).to.eql(1);
      expect(ol.array.linearFindNearest(arr, 200, -1)).to.eql(2);

      expect(ol.array.linearFindNearest(arr, 100, 0)).to.eql(2);
      expect(ol.array.linearFindNearest(arr, 100, 1)).to.eql(2);
      expect(ol.array.linearFindNearest(arr, 100, -1)).to.eql(2);

      expect(ol.array.linearFindNearest(arr, 50, 0)).to.eql(2);
      expect(ol.array.linearFindNearest(arr, 50, 1)).to.eql(2);
      expect(ol.array.linearFindNearest(arr, 50, -1)).to.eql(2);
    });
  });

  describe('numberSafeCompareFunction', function() {
    it('sorts as expected', function() {
      var arr = [40, 200, 3000];
      // default sort would yield [200, 3000, 40]
      arr.sort(ol.array.numberSafeCompareFunction);
      expect(arr).to.eql(arr);
    });
  });

  describe('remove', function() {
    // TODO
  });

  describe('reverseSubArray', function() {
    it('returns expected value', function() {
      var arr;
      var expected = [1, 2, 3, 4, 5, 6];

      arr = [1, 5, 4, 3, 2, 6];
      ol.array.reverseSubArray(arr, 1, 4);
      expect(arr).to.eql(expected);

      arr = [3, 2, 1, 4, 5, 6];
      ol.array.reverseSubArray(arr, 0, 2);
      expect(arr).to.eql(expected);

      arr = [1, 2, 3, 6, 5, 4];
      ol.array.reverseSubArray(arr, 3, 5);
      expect(arr).to.eql(expected);

      arr = [6, 5, 4, 3, 2, 1];
      ol.array.reverseSubArray(arr, 0, 5);
      expect(arr).to.eql(expected);
    });
  });

  describe('stableSort', function() {
    // TODO
  });

});

goog.require('ol.array');
