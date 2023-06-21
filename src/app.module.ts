import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RangeModule } from './range/range.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Profile } from './user/entities/profile.entity';
@Module({
  imports: [
    RangeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // 数据库用户名
      password: '123456', // 数据库密码
      database: 'nest-blog', // 数据库名
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体类文件所在位置
      // entities: [User, Profile],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
