import { Controller, Post, Headers, Body } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('/')
  webhookHandler(
    @Headers('x-github-event') githubEvent: any,
    @Body() body: any,
  ) {
    console.log({ githubEvent });

    return { evento: githubEvent };
  }
}
