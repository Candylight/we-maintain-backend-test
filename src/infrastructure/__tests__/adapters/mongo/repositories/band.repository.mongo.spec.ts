import {BandRepositoryMongo} from "../../../../adapters/mongo/repositories/band.repository.mongo";
import { Test } from '@nestjs/testing';
import {INestApplication} from "@nestjs/common";
import InfrastructureModule from "../../../../infrastructure.module";

describe('BandRepositoryMongo', () => {
    let app: INestApplication;
    let bandRepositoryMongo;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [InfrastructureModule],
            // providers: [BandRepositoryMongo]
        })
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();

        bandRepositoryMongo = app.get(BandRepositoryMongo)
    });

    describe('findAll', () => {

    })

    describe('findByBandIds', () => {
        it('Should return bands list', async () => {
            const results = await bandRepositoryMongo.findByBandIds([1,2])
            expect(results).toEqual([])
        })
    })
})