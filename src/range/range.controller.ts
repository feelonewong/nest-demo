import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RangeService } from './range.service';
import { CreateRangeDto } from './dto/create-range.dto';
import { UpdateRangeDto } from './dto/update-range.dto';

@Controller('range')
export class RangeController {
  constructor(private readonly rangeService: RangeService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    const result: number[] = [];
    for (let i = 0; i < Number(id); i++) {
      result.push(i + 1);
    }
    return {
      code: 0,
      msg: '请求成功!',
      id: result,
    };
  }
}
