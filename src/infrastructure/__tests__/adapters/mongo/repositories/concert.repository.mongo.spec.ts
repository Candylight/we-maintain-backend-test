import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import InfrastructureModule from '../../../../infrastructure.module';

describe('ConcertRepositoryMongo', () => {
  let app: INestApplication;
  let concertRepositoryMongo;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [InfrastructureModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    concertRepositoryMongo = app.get('ConcertRepository');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('findByBandIds', () => {
    it('Should return concerts list by bandIds', async () => {
      const results = await concertRepositoryMongo.findByBandIds([1]);
      expect(results).toMatchObject([
        {
          bandId: 1,
          date: 1199174515916,
          id: '60997374ae234eb4e56e519c',
          venueId: 2,
        },
        {
          bandId: 1,
          date: 1391573996175,
          id: '60997374ae234eb4e56e51a3',
          venueId: 1,
        },
        {
          bandId: 1,
          date: 1206053174059,
          id: '60997374ae234eb4e56e51a9',
          venueId: 5,
        },
        {
          bandId: 1,
          date: 1465857952566,
          id: '60997374ae234eb4e56e51b0',
          venueId: 4,
        },
        {
          bandId: 1,
          date: 1304726383471,
          id: '60997374ae234eb4e56e51b7',
          venueId: 3,
        },
      ]);
    });
  });

  describe('findByVenueIds', () => {
    it('Should return concerts list by venueIds', async () => {
      const results = await concertRepositoryMongo.findByVenueIds([1]);
      expect(results).toMatchObject([
        {
          bandId: 783,
          date: 1577765869761,
          id: '60997374ae234eb4e56e7ee4',
          venueId: 1,
        },
        {
          bandId: 283,
          date: 1569126340647,
          id: '60997374ae234eb4e56e6268',
          venueId: 1,
        },
        {
          bandId: 158,
          date: 1548204620854,
          id: '60997374ae234eb4e56e5b70',
          venueId: 1,
        },
        {
          bandId: 424,
          date: 1546460138829,
          id: '60997374ae234eb4e56e6a73',
          venueId: 1,
        },
        {
          bandId: 271,
          date: 1532949543721,
          id: '60997374ae234eb4e56e61b2',
          venueId: 1,
        },
        {
          bandId: 1119,
          date: 1531977932763,
          id: '60997374ae234eb4e56e9204',
          venueId: 1,
        },
        {
          bandId: 274,
          date: 1530118021254,
          id: '60997374ae234eb4e56e61ed',
          venueId: 1,
        },
        {
          bandId: 873,
          date: 1525049573204,
          id: '60997374ae234eb4e56e8418',
          venueId: 1,
        },
        {
          bandId: 806,
          date: 1507596035754,
          id: '60997374ae234eb4e56e8031',
          venueId: 1,
        },
        {
          bandId: 484,
          date: 1505983638698,
          id: '60997374ae234eb4e56e6e00',
          venueId: 1,
        },
        {
          bandId: 439,
          date: 1499142279409,
          id: '60997374ae234eb4e56e6b86',
          venueId: 1,
        },
        {
          bandId: 735,
          date: 1492235064293,
          id: '60997374ae234eb4e56e7c17',
          venueId: 1,
        },
        {
          bandId: 1368,
          date: 1492011221614,
          id: '60997374ae234eb4e56ea043',
          venueId: 1,
        },
        {
          bandId: 361,
          date: 1487351568140,
          id: '60997374ae234eb4e56e66e7',
          venueId: 1,
        },
        {
          bandId: 548,
          date: 1474599865571,
          id: '60997374ae234eb4e56e71b6',
          venueId: 1,
        },
        {
          bandId: 640,
          date: 1466333158710,
          id: '60997374ae234eb4e56e76ec',
          venueId: 1,
        },
        {
          bandId: 1301,
          date: 1461572026155,
          id: '60997374ae234eb4e56e9cab',
          venueId: 1,
        },
        {
          bandId: 1047,
          date: 1454417876221,
          id: '60997374ae234eb4e56e8de9',
          venueId: 1,
        },
        {
          bandId: 116,
          date: 1449720807154,
          id: '60997374ae234eb4e56e5832',
          venueId: 1,
        },
        {
          bandId: 687,
          date: 1446260365424,
          id: '60997374ae234eb4e56e7988',
          venueId: 1,
        },
        {
          bandId: 740,
          date: 1445625683222,
          id: '60997374ae234eb4e56e7c5a',
          venueId: 1,
        },
        {
          bandId: 1363,
          date: 1439551590593,
          id: '60997374ae234eb4e56e9fe2',
          venueId: 1,
        },
        {
          bandId: 186,
          date: 1438732484284,
          id: '60997374ae234eb4e56e5c87',
          venueId: 1,
        },
        {
          bandId: 382,
          date: 1437488281919,
          id: '60997374ae234eb4e56e67f6',
          venueId: 1,
        },
        {
          bandId: 1127,
          date: 1435715314515,
          id: '60997374ae234eb4e56e9293',
          venueId: 1,
        },
        {
          bandId: 46,
          date: 1426187190094,
          id: '60997374ae234eb4e56e5442',
          venueId: 1,
        },
        {
          bandId: 2,
          date: 1424652665767,
          id: '60997374ae234eb4e56e51b3',
          venueId: 1,
        },
        {
          bandId: 132,
          date: 1414466262225,
          id: '60997374ae234eb4e56e58f7',
          venueId: 1,
        },
        {
          bandId: 1221,
          date: 1411845535169,
          id: '60997374ae234eb4e56e9812',
          venueId: 1,
        },
        {
          bandId: 390,
          date: 1403163115930,
          id: '60997374ae234eb4e56e686f',
          venueId: 1,
        },
        {
          bandId: 282,
          date: 1400046463623,
          id: '60997374ae234eb4e56e625e',
          venueId: 1,
        },
        {
          bandId: 1274,
          date: 1397520462726,
          id: '60997374ae234eb4e56e9ac0',
          venueId: 1,
        },
        {
          bandId: 1314,
          date: 1395569085706,
          id: '60997374ae234eb4e56e9d61',
          venueId: 1,
        },
        {
          bandId: 1,
          date: 1391573996175,
          id: '60997374ae234eb4e56e51a3',
          venueId: 1,
        },
        {
          bandId: 11,
          date: 1390305235212,
          id: '60997374ae234eb4e56e524f',
          venueId: 1,
        },
        {
          bandId: 1384,
          date: 1386502061053,
          id: '60997374ae234eb4e56ea135',
          venueId: 1,
        },
        {
          bandId: 71,
          date: 1374417754565,
          id: '60997374ae234eb4e56e5594',
          venueId: 1,
        },
        {
          bandId: 816,
          date: 1372410527266,
          id: '60997374ae234eb4e56e80ca',
          venueId: 1,
        },
        {
          bandId: 1100,
          date: 1367993823548,
          id: '60997374ae234eb4e56e90f5',
          venueId: 1,
        },
        {
          bandId: 3,
          date: 1359976491899,
          id: '60997374ae234eb4e56e51bd',
          venueId: 1,
        },
        {
          bandId: 961,
          date: 1340709734730,
          id: '60997374ae234eb4e56e894d',
          venueId: 1,
        },
        {
          bandId: 1320,
          date: 1338983762513,
          id: '60997374ae234eb4e56e9dcc',
          venueId: 1,
        },
        {
          bandId: 1297,
          date: 1335235715015,
          id: '60997374ae234eb4e56e9c7a',
          venueId: 1,
        },
        {
          bandId: 954,
          date: 1335198802702,
          id: '60997374ae234eb4e56e88d5',
          venueId: 1,
        },
        {
          bandId: 210,
          date: 1302416662480,
          id: '60997374ae234eb4e56e5deb',
          venueId: 1,
        },
        {
          bandId: 842,
          date: 1300445932739,
          id: '60997374ae234eb4e56e8224',
          venueId: 1,
        },
        {
          bandId: 1002,
          date: 1297054936274,
          id: '60997374ae234eb4e56e8b92',
          venueId: 1,
        },
        {
          bandId: 296,
          date: 1279297648079,
          id: '60997374ae234eb4e56e6352',
          venueId: 1,
        },
        {
          bandId: 1380,
          date: 1275088612085,
          id: '60997374ae234eb4e56ea0ea',
          venueId: 1,
        },
        {
          bandId: 1268,
          date: 1269452553712,
          id: '60997374ae234eb4e56e9a79',
          venueId: 1,
        },
        {
          bandId: 265,
          date: 1267220787978,
          id: '60997374ae234eb4e56e613a',
          venueId: 1,
        },
        {
          bandId: 194,
          date: 1262694551824,
          id: '60997374ae234eb4e56e5cfd',
          venueId: 1,
        },
        {
          bandId: 577,
          date: 1260482679477,
          id: '60997374ae234eb4e56e7391',
          venueId: 1,
        },
        {
          bandId: 569,
          date: 1256885433870,
          id: '60997374ae234eb4e56e7303',
          venueId: 1,
        },
        {
          bandId: 221,
          date: 1239364277439,
          id: '60997374ae234eb4e56e5eb7',
          venueId: 1,
        },
        {
          bandId: 673,
          date: 1237067469696,
          id: '60997374ae234eb4e56e78d8',
          venueId: 1,
        },
        {
          bandId: 310,
          date: 1221951711339,
          id: '60997374ae234eb4e56e6433',
          venueId: 1,
        },
        {
          bandId: 945,
          date: 1212804959104,
          id: '60997374ae234eb4e56e8834',
          venueId: 1,
        },
      ]);
    });
  });
});
