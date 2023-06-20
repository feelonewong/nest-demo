import { Injectable } from '@nestjs/common';
import { CreateRangeDto } from './dto/create-range.dto';
import { UpdateRangeDto } from './dto/update-range.dto';

@Injectable()
export class RangeService {
  create(createRangeDto: CreateRangeDto) {
    return 'This action adds a new range';
  }

  findAll() {
    return `This action returns all range`;
  }

  findOne(id: number) {
    return `This action returns a #${id} range`;
  }

  update(id: number, updateRangeDto: UpdateRangeDto) {
    return `This action updates a #${id} range`;
  }

  remove(id: number) {
    return `This action removes a #${id} range`;
  }
}
