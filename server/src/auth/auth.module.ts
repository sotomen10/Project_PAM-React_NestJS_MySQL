import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/modules/users.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { jwtConfig } from 'src/config/configurationsJwt'
import { JwtStrategyRols } from './jwt-strategy-roles'
import { JwtStrategy } from './jwt-strategy'



@Module({
  imports: [
    ConfigModule.forRoot({
      load: [jwtConfig],
      isGlobal: true, 
    }),
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('secret'),
        signOptions: configService.get('signOptions'),
      }),
    }),
  ],
  providers: [AuthService,JwtStrategyRols,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
