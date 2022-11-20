﻿import { User, UserMapRank, Map as MapDB } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';
import { NestedDto } from '@lib/dto.lib';
import { RunDto } from './runs.dto';
import { UserDto } from '../user/user.dto';
import { MapDto } from '../map/map.dto';

export class UserMapRankDto implements UserMapRank {
    @ApiProperty({ description: 'The gamemode of the run' })
    @IsDefined()
    @IsInt()
    gameType: number;

    @ApiProperty({ description: 'Unimplemented' })
    @IsInt()
    flags: number;

    @ApiProperty({ description: 'The track the run is on' })
    @IsDefined()
    @IsInt()
    trackNum: number;

    @ApiProperty({ description: 'The zone the run is on. > 0 is a IL run, not yet supported' })
    @IsDefined()
    @IsInt()
    zoneNum: number;

    @ApiProperty({ description: 'The leaderboard rank of the run' })
    @IsDefined()
    @IsInt()
    rank: number;

    @ApiProperty({ description: 'The ranked XP assigned for the run' })
    @IsDefined()
    @IsInt()
    rankXP: number;

    @NestedDto(MapDto)
    map: MapDB;

    @ApiProperty()
    @IsInt()
    mapID: number;

    @NestedDto(UserDto)
    user: User;

    @ApiProperty()
    @IsInt()
    userID: number;

    @NestedDto(RunDto)
    run: RunDto;

    @ApiProperty()
    @Transform(({ value }) => BigInt(value))
    runID: bigint;

    @ApiProperty()
    @IsDateString()
    createdAt: Date;

    @ApiProperty()
    @IsDateString()
    updatedAt: Date;
}
