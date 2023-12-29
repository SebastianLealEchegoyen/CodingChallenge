import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { RecordsResolver } from './graphQL/resolvers/record.resolver';
import { RecordService } from './app/record/services/record.service';
import { MailResolver } from './graphQL/resolvers/mail.resolver';
import { JsonMailService } from './app/jsonMail/services/jsonMail.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    RecordsResolver,
    RecordService,
    MailResolver,
    JsonMailService,
  ],
})
export class AppModule {}
