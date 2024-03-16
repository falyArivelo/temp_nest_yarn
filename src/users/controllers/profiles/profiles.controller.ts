import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProfileDto } from 'src/users/dtos/CreateProfile.dto';
import { ProfilesService } from 'src/users/services/profiles/profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }
    @Get()
    getprofiles() {
        return this.profilesService.findProfiles();
    }

    @Post()
    createProfile(@Body() createProfileDto: CreateProfileDto) {
        this.profilesService.createProfile(createProfileDto);
    }

}
