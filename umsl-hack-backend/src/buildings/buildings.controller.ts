import { Controller, Get } from '@nestjs/common';

@Controller('buildings')
export class BuildingsController {
  @Get()
  findAll(): any{
    return 'This returns all buildings';
  }
}
