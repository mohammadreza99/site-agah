import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@core/http/vision/vision.service';
import { Vision } from '@shared/models/vision.model';
import { JobService } from '@app/core/http/job/job.service';
import { JobItem } from '@app/shared/models/job.model';

@Component({
  selector: 'ag-job-oppurtinities-page',
  templateUrl: './job-oppurtinities.page.html',
  styleUrls: ['./job-oppurtinities.page.scss'],
})
export class JobOppurtinitiesPage implements OnInit {
  constructor(
    private visionService: VisionService,
    private jobService: JobService
  ) {}

  vision$: Observable<Vision>;
  jobs$: Observable<JobItem[]>;
  jobs: JobItem[];
  vision = {
    body: `افرادی که شاد هستند، هوش اجتماعی بالایی دارند و برای اعضای خانواده‌شان احترام قائل‌اند به آگاه بیایند» شاید خواندن متنی با این ویژگی‌ها برای صفحه‌ی فرصت‌های شغلی برایتان جالب و جدید باشد. منطقی است! تا جایی که ذهنمان یاری می‌کند و به خاطر می‌آوریم، همیشه در چنین صفحه‌ای از تلاش زیاد، تعهدات محکم، پایبندی به قوانین، مدارک عالیه و تحویل پروژه‌ی بی‌نقص در شرایط ویژه، سخن گفته‌اند. هیچ‌گاه، نمی‌نویسند فردی که شاد است، تضمین بیشتری برای سلامت روانش وجود دارد. در اکثر مواقع فرقی به حال مدیران نمی‌کند که شما تا چه اندازه برای اعضای خانواده‌ی خود ارزش قائل هستید؛ اما این‌ها دقیقاً همان ویژگی‌هایی هستند که برای تیم آگاه در اولویت قرار دارند. ما در آگاه ، یادآوری می‌کنیم حفظ تعادل میان کار و حریم زندگی مهم‌ترین دغدغه‌ی ماست.
در مجموعه‌ی جوان آگاه ، کمی فرصت‌ها متفاوت‌اند. ما بیشتر از هر چیز به تعادل در کار و تفاهم در تصمیم‌گیری معتقدیم. دوستان ما خودشان تصمیم گرفته‌اند جزو آگاه باشند و اصلاً یکی از افتخارات مدیریت آگاه این است که هیچ‌گاه، عذر هیچ فردی را نخواسته است؛ مگر اینکه خود شخص تصمیم به رفتن گرفته باشد. کمتر پیش می‌آید مجموعه‌ای بر تفریحات جمعی، اصرار ورزد و از مراسم‌های مناسبتی، استقبال کند. ما معتقد هستیم وقتی از طریق فرصت‌های شغلی، پنجره‌ای را به‌سوی افرادی می‌گشاییم، بیش از هر چیز، مسئول تأمین امنیت خاطر آن‌ها هستیم. شما باید اطمینان داشته باشید بخش مهمی از شبانه‌روز خود را در مکانی آرام و محیطی شاد زندگی می‌کنید. بنا بر آنچه گفتیم، نگران نباشید و با لبخند برای ما بنویسید چه تخصصی دارید.`,
  };
  ngOnInit(): void {
    this.vision$ = this.visionService.get();
    this.jobService.get().subscribe((res) => {
      this.jobs = res;
    });
  }
}
